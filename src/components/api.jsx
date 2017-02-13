import _ from 'lodash'; //ES6 import to check our babel loader
import 'whatwg-fetch';

/** API **/

const Api = {
	endpoints: {
		base_url: 'http://192.81.221.134:8080/',
		get_dresses: 'dresses?',
		get_dresses_id: 'dresses/{dressId}',
		get_hitlist: 'hitlist',
		post_hitlist_lines: 'hitlist/lines',
		delete_hitlist_lines: 'hitlist/lines/{lineId}',
		get_hitlist_lines: 'hitlist/lines/{lineId}',
		put_hitlist_lines: 'hitlist/lines/{lineId}',
		get_similar: 'similar/{similar}/{dressId}',
		get_similar_appearance: 'similar/appearance/{dressId}',
		get_similar_color: 'similar/color/{dressId}',
		get_similar_shape: 'similar/shape/{dressId}',
		get_similar_texture: 'similar/texture/{dressId}'
	},

	headers: new Headers({
		'Accept': 'application/json',
		'Content-Type': 'application/json'
    }),

	handleErrors: function(response) {
        if (!response.ok) {
            console.log(response.statusText, response.status, response.headers);
            var json = response.json();
            var message = json.message;
            throw "jhsfv jsdfb jkbdf";
        }
        return response;
    },

    get: function(url) {
        return fetch(url, { 
                method: 'GET',
                headers: this.headers
            })
    },

    post: function(url, data) {
        return fetch(url, { 
                method: 'POST',
                headers: this.headers,
                credentials: 'same-origin',
                body: JSON.stringify(data)
            })
    },

    put: function(url, data) {
        return fetch(url, { 
                method: 'PUT',
                credentials: 'same-origin',
                headers: this.headers,
                body: data
            })
    },

    delete: function(url) {
        return fetch(url, { 
                method: 'DELETE',
                credentials: 'same-origin',
                headers: this.headers
            })
    },

    getDresses: function(params) {
    	var url = this.endpoints.base_url + this.endpoints.get_dresses;
    	var esc = encodeURIComponent;
		var query = Object.keys(params)
		    .filter(k => params[k] !== undefined)
		    .map(k => esc(k) + '=' + esc(params[k]))
		    .join('&');
    	return this.get(url + query)
            .then((response) => response.json())
			.catch(function(ex) { console.log('parsing failed', ex); })
    },

    getDressesId: function(dressId) {
    	var url = this.endpoints.base_url + this.endpoints.get_dresses_id.replace('{dressId}', dressId);
    	return this.get(url)
            .then(function(response) { return response.json(); })
			.catch(function(ex) { console.log('parsing failed', ex); })
    },

    getHitlist: function() {
    	var url = this.endpoints.base_url + this.endpoints.get_hitlist;
    	return this.get(url)
            .then(function(response) { return response.json(); })
			.catch(function(ex) { console.log('parsing failed', ex); })
    },

    postHitlistLines: function(dressId, rating) {
    	var url = this.endpoints.base_url + this.endpoints.post_hitlist_lines;
    	var data = {
    		"dress_id": dressId,
    		"rating": Number(rating)
    	};
    	return this.post(url, data)
            .then(function(response) { console.log(response, data); return response.json(); })
			.catch(function(ex) { console.log('parsing failed', ex); })
    },

    deleteDressesId: function(lineId) {
    	var url = this.endpoints.base_url + this.endpoints.delete_hitlist_lines.replace('{lineId}', lineId);
    	return this.delete(url)
            .then(function(response) { return response.json(); })
			.catch(function(ex) { console.log('parsing failed', ex); })
    },

    getHitlistLines: function(lineId) {
    	var url = this.endpoints.base_url + this.endpoints.get_hitlist_lines.replace('{lineId}', lineId);
    	return this.get(url)
            .then(function(response) { return response.json(); })
			.catch(function(ex) { console.log('parsing failed', ex); })
    },

    putHitlistLines: function(lineId, dressId, rating) { // not sure what is it ???
    	var url = this.endpoints.base_url + this.endpoints.put_hitlist_lines.replace('{lineId}', lineId);
		var data = {
			dress_id: dressId,
			line_id: lineId,
			rating: rating
		}
    	return this.put(url, data)
            .then(function(response) { return response.json(); })
			.catch(function(ex) { console.log('parsing failed', ex); })
    },

    getSimilar: function(similar, dressId) {
    	var url = this.endpoints.base_url + this.endpoints.get_hitlist_lines.replace('{similar}', similar).replace('{dressId}', dressId);
    	return this.get(url)
            .then(function(response) { return response.json(); })
			.catch(function(ex) { console.log('parsing failed', ex); })
    },

};

	
export default Api;	
    