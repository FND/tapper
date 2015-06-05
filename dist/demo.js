/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var Tapper = __webpack_require__(2);
	var supplant = __webpack_require__(3);

	var origins = document.querySelectorAll("audio"); // NB: _static_ collection
	[].forEach.call(origins, function(origin)  {
		supplant(origin, React.createElement(Tapper, {audio: origin}))
	});

	function spawnIndicator(ref) {
		var ind = document.createElement("div");
		ind.style.position = "absolute";
		ind.style.top = 0;
		ind.style.left = 0;
		ind.style.width = "2px";
		ind.style.height = "100%";
		ind.style.backgroundColor = "red";

		var container = ref.parentNode;
		container.style.position = "relative";
		container.insertBefore(ind, ref);

		return ind;
	}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	module.exports = React.createClass({
		displayName: "Tapper",
		render:function() {
			var audioNode = this.props.audio;
			var waveform = audioNode.getAttribute("data-waveform");
			// XXX: recreating the audio element is silly, but React doesn't make
			//      it easy to work with existing DOM nodes
			return React.createElement("div", {className: "tapper"}, 
				React.createElement("img", {src: waveform}), 
				React.createElement("audio", {src: audioNode.src, controls: true, ref: "audio"}), 
				React.createElement("p", null, "now playing: ", audioNode.src), 
				React.createElement("div", {className: "indicator", ref: "indicator"})
			)
		},
		componentDidMount:function() {
			var audioNode = React.findDOMNode(this.refs.audio);
			audioNode.addEventListener("timeupdate", this.onPlayback);
			this.indicator = React.findDOMNode(this.refs.indicator); // for efficiency
		},
		onPlayback: function(ev) { // XXX: event triggers only every ~250 ms, thus not very smooth
			var player = ev.target;
			var progress = player.currentTime / player.duration;
			this.indicator.style.left = (progress * 100) + "%";
		}
	});


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// spawns `component` in place of `originalNode`
	module.exports = function(originalNode, component, callback)  {
		var wrapper = document.createElement("div");
		React.render(component, wrapper, function()  {
			// discard wrapper to avoid divitis
			var root = wrapper.childNodes[0]; // XXX: do all components have a single root element?
			replaceNode(originalNode, root);
			if(callback) {
				callback(root);
			}
		});
	}

	function replaceNode(oldNode, newNode) {
		var container = oldNode.parentNode;
		container.insertBefore(newNode, oldNode);
		container.removeChild(oldNode);
	}


/***/ }
/******/ ]);