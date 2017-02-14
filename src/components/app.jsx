import React from 'react';
import _ from 'lodash'; //ES6 import to check our babel loader
import $ from 'jquery';
import 'whatwg-fetch';
import classNames from 'classnames';
import Api from './api.jsx';
import Header from './header.jsx';
import DressList from './dress-list.jsx';
import Pagination from './pagination.jsx';
import SortBy from './sort-by.jsx';

Api.getHitlist().then((res) => { console.log(res) });
 
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeList: "dressesList",
			dressesList: {
				pageSize: 12,
				pageNum: 0,
				totalPages: 0,
				dresses: []
			},
			hitList: {
				dresses: []
			} 
		};
		this.startSorting = this.startSorting.bind(this);
		this.setRating = this.setRating.bind(this);
		this.changeActiveList = this.changeActiveList.bind(this);
	}
	setDressesList(params) {
		Api.getDresses(params).then(response => {
			this.setState({
				dressesList: {
					...this.state.dressesList,
				 	dresses: response.items,
				 	totalPages: response.total_pages,					 	
				}
			});
		});
	}
	setHitList() {
		Api.getHitlist().then(response => {
			let lines = response.lines;
			const allDresses = this.state.dressesList.dresses;
			lines.forEach((line) => {
				let thatDress = allDresses.find((d) => d.id == line.dress_id);
				line = _.extend(line, thatDress);
			});
			console.log(lines);
			this.setState({
				hitList: {
				 	dresses: lines					 	
				}
			});
		});
	}
	componentDidMount() {
			this.setDressesList({
				pageSize: this.state.dressesList.pageSize,
				pageNum: this.state.dressesList.pageNum
			});
			this.setHitList();
	}
	changePage(e, change) {
		e.preventDefault();
		const s = this.state.dressesList;
		const newPageNum = s.pageNum + change;
		this.setState({ 
			dressesList: {
				...this.state.dressesList,
				pageNum: newPageNum 
			}
		});
		this.setDressesList({
			pageSize: s.pageSize,
			pageNum: newPageNum,
			sortOn: s.sortOn,
			sortOrder: s.sortOrder
		});
	}
	startSorting(e) {
		e.preventDefault();
		const s = this.state.dressesList;
		let value = JSON.parse(e.target.value);
		let newPageNum = 0;
		this.setState({ 
			dressesList: {
				...this.state.dressesList,
				pageNum: newPageNum,
				sortOn:  value.sortOn,
				sortOrder: value.sortOrder
			}
		});
		this.setDressesList({
			pageSize: s.pageSize,
			pageNum: newPageNum,
			sortOn: value.sortOn,
			sortOrder: value.sortOrder
		});
	}
	setRating(id, rating) {
		Api.postHitlistLines(id, rating)
			.then((res) => { 
				let dresses = this.state.hitList.dresses.slice();
				let d = this.state.dressesList.dresses.find((dress) => (dress.id == res.dress_id));
				d.rating = res.rating;
				dresses.push(d);
				this.setState({ 
					hitList: {
						dresses: dresses
					}
				});
				return res;
			})
			.then((res) => {
				let dresses = this.state.dressesList.dresses.slice();
				dresses.forEach((dress) => { if (dress.id == res.dress_id) dress.rating = res.rating });
				this.setState({ 
					dressesList: {
						...this.state.dressesList,
						dresses: dresses
					}
				});
			})
	}
	changeActiveList(e, activeList) {
		e.preventDefault();
		$('.active').removeClass('active');
		$(e.target).addClass('active');
		this.setState({ 
			activeList: activeList
		});
	}
	render() {
		let section;
		if (this.state.activeList == "dressesList") {
			let s = this.state.dressesList;
			const pagination = () => <Pagination 
				prevPage={e => this.changePage(e, -1)} 
				nextPage={e => this.changePage(e, +1)}
				pageNum={s.pageNum}
				totalPages={s.totalPages} 
			/>;
			section = <section className="container content dresslist">
				<div className="sorting-container">
					<p className="page-numbering">{1 + s.pageNum*s.pageSize} - {s.pageSize + s.pageNum*s.pageSize} from {s.totalPages * s.pageSize}</p>
					<SortBy startSorting={this.startSorting} />
				</div>
				{pagination()}
				<DressList dresses={s.dresses} setRating={this.setRating} />
				{pagination()}
			</section>;
		} else {
			let s = this.state.hitList;
			section = <section className="container content hitlist">
				<DressList dresses={s.dresses} />
			</section>;
		}
		return <div>
			<Header changeActiveList={this.changeActiveList} />
			{section}
		</div>
	}
}

export default App;	