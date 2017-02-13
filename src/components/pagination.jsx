import React from 'react';
import ReactDOM from 'react-dom';

class Pagination extends React.Component {
	render() {
		return <div className="pagination-container"> 
			<button className="button prev" onClick={this.props.prevPage} disabled={this.props.pageNum == 0}><img className="arrow" src="images/left_arrow.svg" /></button>
			<button className="button next" onClick={this.props.nextPage} disabled={this.props.pageNum == this.props.totalPages}><img className="arrow" src="images/right_arrow.svg" /></button>
		</div>
	}
}

export default Pagination;