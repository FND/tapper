"use strict";

var React = require("react");
var Tapper = require("../src/index");
var supplant = require("../src/supplant");

var origins = document.querySelectorAll("audio"); // NB: _static_ collection
[].forEach.call(origins, (origin) => {
	supplant(origin, <Tapper audio={origin} />)
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
