const hc = require("host-checker");

if (hc.IsHosting("replit") && process.versions.node.split(".")[0] < 16) {
  const { execSync } = require("child_process");

  console.log(
    "[INFO] This Replit doesn't use Node.js v16 or newer, trying to install Node.js v16..."
  );
  execSync(
    `npm i --save-dev node@17.9.0 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH`
  );
  console.log("[INFO] Node.js v17 has been installed, please restart the bot.");
  process.exit(0);
}

require("./src/index.js")();
