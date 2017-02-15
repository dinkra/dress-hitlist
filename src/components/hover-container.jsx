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
		// if (this.props.dress.rating) return null;
		return <div className="hover-container">
			{this.props.dress.rating ? <p>In hitlist</p> : <p>Rate to add<br/> to hitlist</p>}
			<RatingWidget setRating={this.props.setRating} dress={this.props.dress} prefix="hover-container" />
			{this.props.dress.rating && 
				<button className="remove-button" onClick={ e => this.props.deleteHitlistLine(e, this.props.dress.line_id)}>remove</button>
			}
		</div>
	}
}

export default HoverContainer;