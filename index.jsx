"use strict";

var React = require("react");

module.exports = React.createClass({
	displayName: "Tapper",
	render: function() {
		return <div className="tapper">
			<h3>Tapper</h3>
			<p>now playing: {this.props.src}</p>
		</div>
	}
});
