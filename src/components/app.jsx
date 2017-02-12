import React from 'react';
import _ from 'lodash'; //ES6 import to check our babel loader
import $ from 'jquery';
import 'whatwg-fetch';
import classNames from 'classnames';
import DressList from './dress-list.jsx';
import Pagination from './pagination.jsx';
import SortBy from './sort-by.jsx';

/**
 * API
 */

 var URL = "http://192.81.221.134:8080/";

 function fetchDresses(params) {
 	var esc = encodeURIComponent;
	var query = Object.keys(params)
	    .filter(k => params[k] !== undefined)
	    .map(k => esc(k) + '=' + esc(params[k]))
	    .join('&');
	return fetch(URL + 'dresses?' + query)
		.then(function(response) {
			return response.json();
		})
		.catch(function(ex) { console.log('parsing failed', ex); })
}
 
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
		fetchDresses(params).then(response => {
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
		return <div className="container">
			<h1>Dress list</h1>
			<div>{1 + s.pageNum*s.pageSize} - {s.pageSize + s.pageNum*s.pageSize} from {s.totalPages * s.pageSize}</div>
			<SortBy startSorting={this.startSorting} />
			{pagination()}
			<DressList dresses={s.dresses} />
			{pagination()}
		</div>
	}
}

export default App;	