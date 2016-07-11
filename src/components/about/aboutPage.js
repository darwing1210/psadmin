"use strict"; // Tell browser to use strict to this js file

var React = require('react');

// About Component
var About = React.createClass({
	render: function() {  //render to the screen
		return (
			<div>
                <h1>About</h1>
                <p>
                    This application will use the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
		);
	}
});

module.exports = About;