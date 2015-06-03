"use strict";

var React = require("react");
var Tapper = require("./index");

init();

function init() {
	var origins = document.querySelectorAll("audio"); // NB: _static_ collection
	[].forEach.call(origins, supplant);
}

function supplant(audioNode) {
	var wrapper = document.createElement("div");
	React.render(<Tapper src={audioNode.src} />, wrapper, function() {
		// discard wrapper to avoid divitis
		var tapper = wrapper.childNodes[0];
		replaceNode(audioNode, tapper);
	});
}

function replaceNode(oldNode, newNode) {
	var container = oldNode.parentNode;
	container.insertBefore(newNode, oldNode);
	container.removeChild(oldNode);
}
