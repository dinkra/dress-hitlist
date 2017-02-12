import React from 'react';
import ReactDOM from 'react-dom';

class DressItem extends React.Component {
	render() {
		return <div className="dress-item"> 
			<img src={this.props.thumbnails[0]} />
			<h4>{this.props.name}</h4>
			<h5>{this.props.brand_name}</h5>
			<h3>{this.props.price}</h3>
		</div>
	}
}

export default DressItem;