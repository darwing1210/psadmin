"use strict"; // Tell browser to use strict to this js file

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

// Home Component
var Home = React.createClass({
	render: function() {  //render to the screen
		return (
			<div className = "jumbotron">
				<h1>Pluralsight Administration</h1>
				<p>React, React Router, and Flux for ultra-responsive web apps. </p>
				<Link to="about" className="btn btn-primary btn-lg">About us</Link>
			</div>
		);
	}
});

module.exports = Home;