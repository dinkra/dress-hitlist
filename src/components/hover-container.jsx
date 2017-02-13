import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Api from './api.jsx';
import RatingWidget from './rating-widget.jsx';

const url = "http://192.81.221.134:8080/hitlist/lines";

class HoverContainer extends React.Component {
	constructor(props) {
		super(props);
		this.setRating = this.setRating.bind(this);
	}
	setRating(id, rating) {
		console.log(id, rating);
		// Api.postHitlistLines(id, rating)
		// 	.then(function(res) { console.log(res) })
		// 	.then(function() { 
		// 		Api.getHitlist().then(function(res) { console.log(res) })
		// 	})
		$.ajax({
		    beforeSend: function(xhrObj){
		        xhrObj.setRequestHeader("Content-Type","application/json");
		        xhrObj.setRequestHeader("Accept","application/json");
		    },
		    type: "POST",
		    url: url,       
		    data: JSON.stringify({
				"dress_id": id, 
				"line_id": id,
				"rating": Number(rating)
		    }),               
		    dataType: "json",
		    success: function(json){
		       console.log(json);
		    }
		});
	}
	render() {
		return <div className="hover-container">
			<a href="">view details</a>
			<a href="">add rating</a>
			<RatingWidget setRating={this.setRating} dress={this.props.dress} />
		</div>
	}
}

export default HoverContainer;