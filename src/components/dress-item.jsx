import React from 'react';
import ReactDOM from 'react-dom';

class DressItem extends React.Component {
	render() {
		return <li className="dress-item"> 
			<img src={this.props.dress.thumbnails[0]} />
			<h4>{this.props.dress.name}</h4>
			<h5>{this.props.dress.brand_name}</h5>
			<h3>{this.props.dress.price}</h3>
		</li>
	}
}

export default DressItem;