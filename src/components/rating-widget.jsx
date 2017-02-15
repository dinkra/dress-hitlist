import React from 'react';
import ReactDOM from 'react-dom';
import './../css/rating-widget.css';

class RatingWidget extends React.Component {
	render() {
		var rating = this.props.dress.rating;
		let prefix = this.props.prefix;
		let dressId = this.props.dress.id + prefix;
		let name = "name-" + dressId + prefix;
		return <fieldset className="rating" onChange={ e => this.props.setRating(this.props.dress.id, e.target.value) }>
		    <input type="radio" id={"id5" + dressId} name={name} value="5" checked={rating == 5} /><label className="full" htmlFor={"id5" + dressId}></label>
		    <input type="radio" id={"id4" + dressId} name={name} value="4" checked={rating == 4} /><label className="full" htmlFor={"id4" + dressId}></label>
		    <input type="radio" id={"id3" + dressId} name={name} value="3" checked={rating == 3} /><label className="full" htmlFor={"id3" + dressId}></label>
		    <input type="radio" id={"id2" + dressId} name={name} value="2" checked={rating == 2} /><label className="full" htmlFor={"id2" + dressId}></label>
		    <input type="radio" id={"id1" + dressId} name={name} value="1" checked={rating == 1} /><label className="full" htmlFor={"id1" + dressId}></label>
		</fieldset>
	}
}

export default RatingWidget;