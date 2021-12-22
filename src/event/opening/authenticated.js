const fs = require("fs");

module.exports = {
  name: "authenticated",
  async execute(session, client) {
    console.log("[CLIENT INFO] Authenticated");
    
    fs.writeFileSync("./src/session.json", JSON.stringify(session));
  },
};
