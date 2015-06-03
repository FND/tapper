"use strict";

// spawns `component` in place of `originalNode`
module.exports = (originalNode, component, callback) => {
	var wrapper = document.createElement("div");
	React.render(component, wrapper, () => {
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
