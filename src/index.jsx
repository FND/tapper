"use strict";

var React = require("react");

module.exports = React.createClass({
	displayName: "Tapper",
	render() {
		var audioNode = this.props.audio;
		var waveform = audioNode.getAttribute("data-waveform");
		// XXX: recreating the audio element is silly, but React doesn't make
		//      it easy to work with existing DOM nodes
		return <div className="tapper">
			<div className="waveform">
				<img src={waveform} />
				<div className="indicator" ref="indicator" />
			</div>
			<audio src={audioNode.src} controls ref="audio" />
			<p>now playing: {audioNode.src}</p>
		</div>
	},
	componentDidMount() {
		var audioNode = React.findDOMNode(this.refs.audio);
		audioNode.addEventListener("timeupdate", this.onPlayback);
		this.indicator = React.findDOMNode(this.refs.indicator); // for efficiency
	},
	onPlayback: function(ev) { // XXX: event triggers only every ~250 ms, thus not very smooth
		var player = ev.target;
		var progress = player.currentTime / player.duration;
		this.indicator.style.width = (progress * 100) + "%";
	}
});
