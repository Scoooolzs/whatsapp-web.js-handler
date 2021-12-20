const fs = require("fs");
const child = require("child_process");
const hc = require("host-checker");

if (hc.IsHosting("glitch")) {
  throw new Error(
    '[ERROR] Glitch hosting is not supported. You can using a "Replit" hosting for the alternative.'
  );
}

if (hc.IsHosting("replit") && process.versions.node.split(".")[0] < 16) {
  console.info(
    "[INFO] This Replit of Node.js in under 16. Trying to install Node.js v16.. This can take a minutes.."
  );
  child.execSync(
    `npm i --save-dev node@16.6.1 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH`
  );
  console.info(
    "[INFO] Node.js v16 has been installed. Please restart this project."
  );
  process.exit(0);
}

if (process.versions.node.split(".")[0] < 16) {
  throw new Error(
    "[ERROR] The version of Node.js is under 16. Please update in https://nodejs.org/"
  );
}

if (!fs.existsSync("./package-lock.json")) {
  console.log("[INFO] Trying to install package.. This can took a minutes..");

  try {
    child.execSync("npm i");
  } catch (err) {
    console.log("[ERROR] Automatic install package is failed. Error:\n" + err);
    process.exit(0);
  }

  const List = ["normal", "beta"];
  
  if (!List.includes(`${require("./config.json").whatsapp}`.toLowerCase())) {
    throw new Error(
      `The config.json for whatsapp is ${
        require("./config.json").whatsapp
      }. But the available is: "normal" and "beta".`
    );
  }
  
  switch (`${require("./config.json").whatsapp}`.toLowerCase()) {
    case "normal":
      console.log(
        "[INFO] Success to install all package. Trying to install whatsapp-web.js.. This can took a long minutes.."
      );
  
      try {
        child.execSync("npm i whatsapp-web.js");
      } catch (err) {
        console.log("[ERROR] Install whatsapp-web.js is failed. Error:\n" + err);
        process.exit(0);
      }
  
      console.log(
        "[INFO] Install package is complete. Please restart this project."
      );
      process.exit(0);
      break;
    case "beta":
      console.log(
        "[INFO] Success to install all package. Trying to install whatsapp-web.js (BETA).. This can took a long minutes.."
      );
  
      try {
        child.execSync("npm i github:pedroslopez/whatsapp-web.js#multidevice");
      } catch (err) {
        console.log(
          "[ERROR] Install whatsapp-web.js (BETA) is failed. Error:\n" + err
        );
        process.exit(0);
      }
  
      console.log(
        "[INFO] Install package is complete. Please restart this project."
      );
      process.exit(0);
      break;
  }
}

require("./src/index.js")();
