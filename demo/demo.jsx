"use strict";

var React = require("react");
var Tapper = require("../src/index");
var supplant = require("../src/supplant");

var origins = document.querySelectorAll("audio"); // NB: _static_ collection
[].forEach.call(origins, (origin) => {
	supplant(origin, <Tapper src={origin.src} />);
});
