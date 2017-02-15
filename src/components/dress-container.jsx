import React from 'react';
import ReactDOM from 'react-dom';
import HoverContainer from './hover-container.jsx';
import RatingWidget from './rating-widget.jsx';

class DressContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <li className="dress-container three columns"> 
			<HoverContainer dress={this.props.dress} setRating={this.props.setRating} deleteHitlistLine={this.props.deleteHitlistLine} />
			<img src={this.props.dress.thumbnails ? this.props.dress.thumbnails[0] : this.props.dress.images[0] } />
			<div className="dress-info">
				<h4 className="dress-name">{this.props.dress.name}</h4>
				<h5 className="dress-brand">{this.props.dress.brand_name}</h5>
				{ this.props.dress.rating &&
					<RatingWidget setRating={this.props.setRating} dress={this.props.dress} prefix="dress-container" />
				}
				<h3 className="dress-price">€{this.props.dress.price}</h3>
			</div>
		</li>
	}
}

export default DressContainer;