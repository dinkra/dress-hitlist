import React from 'react';
import ReactDOM from 'react-dom';

class Pagination extends React.Component {
	render() {
		return <div className="pagination-container"> 
			<button onClick={this.props.prevPage} disabled={this.props.pageNum == 0}>prev page</button>
			<button onClick={this.props.nextPage} disabled={this.props.pageNum == this.props.totalPages}>next page</button>
		</div>
	}
}

export default Pagination;