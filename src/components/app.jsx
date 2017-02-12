import React from 'react';
import $ from "jquery";
import 'whatwg-fetch';
import DressItem from './dress-item.jsx';

/**
 * API
 */

 var URL = "http://192.81.221.134:8080/";

 function fetchDresses(pageSize, pageNum, sortOn, sortOrder) {
 	console.log(pageSize, pageNum);
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
			dresses: []
		};
		this.prevPage = this.prevPage.bind(this);
		this.nextPage = this.nextPage.bind(this);
	}
	componentDidMount() {
		fetchDresses(this.state.pageSize).then(response => {
			this.setState({
				dresses: response.items
			});
		});
	}
	componentWillUnmount() {

	}
	prevPage(e) {
		e.preventDefault();
		this.state.pageNum--;
		this.setState(prevState => ({
			pageNum: prevState.pageNum--
		}));
		fetchDresses(this.state.pageSize, this.state.pageNum).then(response => {
			this.setState({
				dresses: response.items
			});
		});
	}
	nextPage(e) {
		e.preventDefault();
		this.state.pageNum++;
		this.setState(prevState => ({
			pageNum: prevState.pageNum++
		}));
		fetchDresses(this.state.pageSize, this.state.pageNum).then(response => {
			this.setState({
				dresses: response.items
			});
		});
	}
	render() {
		console.log(this.state);
		var dresses = this.state.dresses.map(function(dress, index) {
            return (
                <DressItem name={dress.name}
                      brand_name={dress.brand_name}
                      price={dress.price}
                      thumbnails={dress.thumbnails}
                      key={dress.id}
                      index={index}>
                </DressItem>
            );
        });
        function NumberList(props) {
			const numbers = props.numbers;
			const listItems = numbers.map((number) =>
				<ListItem key={number.toString()}
				value={number} />
			);
			return (
				<ul>
					{listItems}
				</ul>
			);
		}
		return <div>
			<h1>Dress list</h1>
			<div className="dress-list">
				{dresses}
			</div>
			<button onClick={this.prevPage}>prev page</button>
			<button onClick={this.nextPage}>next page</button>
		</div>
	}
}

export default App;	