import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Api from './api.jsx';
import RatingWidget from './rating-widget.jsx';

class HoverContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className="hover-container">
			<a href="">view details</a>
			<a href="">add rating</a>
			<RatingWidget setRating={this.props.setRating} dress={this.props.dress} />
		</div>
	}
}

export default HoverContainer;