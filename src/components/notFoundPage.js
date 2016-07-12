"use strict"; // Tell browser to use strict to this js file

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

// Home Component
var NotFoundPage = React.createClass({
	render: function() {  //render to the screen
		return (
			<div>
				<h1>Ups, Page not found</h1>
				<p>Whoops! Sorry, theres nothing to see here.</p>
				<p><Link to="app">Back to Home </Link></p>
			</div>
		);
	}
});

module.exports = NotFoundPage;