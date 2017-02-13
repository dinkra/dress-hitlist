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

Api.getHitlist()
	.then(function(res) { console.log(res) });
 
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageSize: 12,
			pageNum: 0,
			totalPages: 0,
			dresses: []
		};
		this.startSorting = this.startSorting.bind(this);
	}
	setDresses(params) {
		Api.getDresses(params).then(response => {
			this.setState({
				dresses: response.items,
				totalPages: response.total_pages
			});
		});
	}
	componentDidMount() {
		this.setDresses({
			pageSize: this.state.pageSize,
			pageNum: this.state.pageNum
		});
	}
	changePage(e, change) {
		e.preventDefault();
		const newPageNum = this.state.pageNum + change;
		this.setState({ pageNum: newPageNum });
		this.setDresses({
			pageSize: this.state.pageSize,
			pageNum: newPageNum,
			sortOn: this.state.sortOn,
			sortOrder: this.state.sortOrder
		});
	}
	startSorting(e) {
		e.preventDefault();
		let value = JSON.parse(e.target.value);
		let newPageNum = 0;
		this.setState({ 
			pageNum: newPageNum,
			sortOn:  value.sortOn,
			sortOrder: value.sortOrder
		});
		this.setDresses({
			pageSize: this.state.pageSize,
			pageNum: newPageNum,
			sortOn: value.sortOn,
			sortOrder: value.sortOrder
		});
	}
	render() {
		const s = this.state;
		const pagination = () => <Pagination 
			prevPage={e => this.changePage(e, -1)} 
			nextPage={e => this.changePage(e, +1)}
			pageNum={s.pageNum}
			totalPages={s.totalPages} 
		/>;
		return <div>
			<Header />
			<section className="container content">
				<div className="sorting-container">
					<p className="page-numbering">{1 + s.pageNum*s.pageSize} - {s.pageSize + s.pageNum*s.pageSize} from {s.totalPages * s.pageSize}</p>
					<SortBy startSorting={this.startSorting} />
				</div>
				{pagination()}
				<DressList dresses={s.dresses} />
				{pagination()}
			</section>
		</div>
	}
}

export default App;	