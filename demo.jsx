"use strict";

var React = require("react");
var Tapper = require("./index");
var supplant = require("./supplant");

var origins = document.querySelectorAll("audio"); // NB: _static_ collection
[].forEach.call(origins, function(origin) {
	supplant(origin, <Tapper src={origin.src} />);
});
