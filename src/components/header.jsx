import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
	render() {
		return <header className="header"> 
			<div className="container">
				<a className="logo-placeholder">
					<h1>Your Logo</h1>
				</a>
				<a className="tab" onClick={ e => this.props.changeActiveList(e, "dressesList")}><h4 className="dresses-tab active">dresses</h4></a>
	            <a className="tab" onClick={ e => this.props.changeActiveList(e, "hitList")}><h4 className="hitlist-tab">hitlist</h4></a>
			</div>
		</header>
	}
}

export default Header;