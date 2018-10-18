const buildable = require("../client/buildable.js");
const path = require("path");

class gameDataSuper extends buildable(function() {}) {
    constructor() {
	super();
	this.data = {};
	this.prefix = "/gameData/";
	this.resourcePath = path.join(this.prefix, "resources");
	this.metaPath = path.join(this.prefix, "meta");
    }
}


module.exports = gameDataSuper;
