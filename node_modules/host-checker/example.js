const { IsHosting, UsingHosting, version } = require("./index");

// Check host
if (IsHosting("replit")) {
	console.log("This user is using Replit.");
} else {
	console.log("This user is NOT using Replit.");
}

if (IsHosting("github")) {
	console.log("This user is using GitHub.");
} else {
	console.log("This user is NOT using Github");
}

if (IsHosting("glitch")) {
	console.log("This user is using Glitch.");
} else {
	console.log("This user is NOT using Glitch.");
}

// See Host
console.log(UsingHosting()) // if user is not using a hosting. it return null.

// See Version of Host Checker Package
console.log(`Host Checker package version: ${version}`);
