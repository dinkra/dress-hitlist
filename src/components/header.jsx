import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
	render() {
		return <header className="header"> 
			<div className="container">
				<a className="logo-placeholder">
					<h1>Your Logo</h1>
				</a>
				<a href="" className="tab"><h4 className="dresses-tab">ALL DRESSES</h4></a>
	            <a href="" className="tab"><h4 className="hitlist-tab">HITLIST</h4></a>
			</div>
		</header>
	}
}

export default Header;