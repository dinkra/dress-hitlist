import React from 'react';
import ReactDOM from 'react-dom';
import HoverContainer from './hover-container.jsx';

class DressContainer extends React.Component {
	render() {
		return <li className="dress-container three columns"> 
			<HoverContainer dress={this.props.dress} />
			<img src={this.props.dress.thumbnails[0]} />
			<div className="dress-info">
				<h4 className="dress-name">{this.props.dress.name}</h4>
				<h5 className="dress-brand">{this.props.dress.brand_name}</h5>
				<h3 className="dress-price">€{this.props.dress.price}</h3>
			</div>
		</li>
	}
}

export default DressContainer;