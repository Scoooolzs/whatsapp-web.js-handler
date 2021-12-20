"use strict";

function UsingHosting() {
  const { isGithub, isGlitch, isReplit } = require("./util/host.js");

  let host = null;

  switch (true) {
    case isGithub:
      host = "github";
      break;
    case isGlitch:
      host = "glitch";
      break;
    case isReplit:
      host = "replit";
      break;
  }

  return host;
}

module.exports = UsingHosting;