import React from 'react';
import ReactDOM from 'react-dom';
import './../css/rating-widget.css';

class RatingWidget extends React.Component {
	render() {
		const dressId = this.props.dress.id;
		const name = "name-" + dressId;
		const options = [{
			rating: 5,
			dressId: dressId
		},{}];
		const ratingOptionsList = options.map((option, index) => 
			<span><input type="radio" id={"id5" + dressId} name={name} value="5" /><label className="full" htmlFor={"id5" + dressId}></label></span>
        );
		return <fieldset className="rating" onChange={ e => this.props.setRating(dressId, e.target.value) }>
		    <input type="radio" id={"id5" + dressId} name={name} value="5"/><label className="full" htmlFor={"id5" + dressId}></label>
		    <input type="radio" id={"id4" + dressId} name={name} value="4" /><label className="full" htmlFor={"id4" + dressId}></label>
		    <input type="radio" id={"id3" + dressId} name={name} value="3" /><label className="full" htmlFor={"id3" + dressId}></label>
		    <input type="radio" id={"id2" + dressId} name={name} value="2" /><label className="full" htmlFor={"id2" + dressId}></label>
		    <input type="radio" id={"id1" + dressId} name={name} value="1" /><label className="full" htmlFor={"id1" + dressId}></label>
		</fieldset>
	}
}

export default RatingWidget;