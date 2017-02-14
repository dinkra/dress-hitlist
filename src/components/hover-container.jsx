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
			{this.props.dress.rating ? <p>Item is added to hitlist</p> : <p>Add item to hitlist</p>}
			<RatingWidget setRating={this.props.setRating} dress={this.props.dress} />
		</div>
	}
}

export default HoverContainer;