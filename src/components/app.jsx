import React from 'react';
import $ from 'jquery';
import 'whatwg-fetch';
import classNames from 'classnames';
import DressList from './dress-list.jsx';
import Pagination from './pagination.jsx';

/**
 * API
 */

 var URL = "http://192.81.221.134:8080/";

 function fetchDresses(pageSize, pageNum, sortOn, sortOrder) {
 	pageSize = pageSize || 12;
 	pageNum = pageNum || 0; 
 	sortOn = sortOn || ""; 
 	sortOrder = sortOrder || "";
	return fetch(URL + 'dresses?pageSize=' + pageSize + '&pageNum=' + pageNum)
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
		this.prevPage = this.prevPage.bind(this);
		this.nextPage = this.nextPage.bind(this);
	}
	componentDidMount() {
		fetchDresses(this.state.pageSize).then(response => {
			this.setState({
				dresses: response.items,
				totalPages: response.total_pages
			});
		});
	}
	componentWillUnmount() {

	}
	prevPage(e) {
		e.preventDefault();
		const newPageNum = this.state.pageNum - 1;
		this.setState({ pageNum: newPageNum });
		fetchDresses(this.state.pageSize, this.state.pageNum).then(response => {
			this.setState({ dresses: response.items });
		});
	}
	nextPage(e) {
		e.preventDefault();
		const newPageNum = this.state.pageNum + 1;
		this.setState({ pageNum: newPageNum });
		fetchDresses(this.state.pageSize, newPageNum).then(response => {
			this.setState({ dresses: response.items });
		});
	}
	render() {
		return <div>
			<h1>Dress list</h1>
			<DressList dresses={this.state.dresses} />
			<Pagination prevPage={this.prevPage} 
						nextPage={this.nextPage}
						pageNum={this.state.pageNum}
						totalPages={this.state.totalPages}/>
		</div>
	}
}

export default App;	