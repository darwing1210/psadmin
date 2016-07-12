"use strict"; // Tell browser to use strict to this js file

var React = require('react');

// header Component
var Header = React.createClass({
	render: function() {  //render to the screen
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<a href='/' className="navbar-brand">
						<img src="images/pluralsight-logo.png" />
					</a>
					<ul className="nav navbar-nav">
						<li><a href="/">Home </a></li>
						<li><a href="/#about">About</a></li>
						<li><a href="/#authors">Authors</a></li>
					</ul>
				</div>
			</nav>
		);
	}
});

module.exports = Header;