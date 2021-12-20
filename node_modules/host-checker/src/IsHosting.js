"use strict";

function IsHosting(string) {
	const { isGithub, isGlitch, isReplit } = require("./util/host.js");

	const hostList = ["glitch", "github", "replit"];
	const stringLow = string.toLowerCase();

	if (!string) {
		throw new Error("Please specify the host.");
	}

	if (!hostList.includes(stringLow)) {
		throw new Error("The host is invalid or not supported.");
	}

	if (typeof string !== "string") {
		throw new Error("The host must be a string.");
	}

	let host = false;

	switch (true) {
		case isGlitch && stringLow === "glitch":
			host = true;
			break;
		case isReplit && stringLow === "replit":
			host = true;
			break;
		case isGithub && stringLow === "github":
			host = true;
			break;
	}

	return host;
}

module.exports = IsHosting;
