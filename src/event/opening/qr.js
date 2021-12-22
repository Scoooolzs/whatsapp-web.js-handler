const qrcode = require("qrcode-terminal");

module.exports = {
  name: "qr",
  async execute(qr, client) {
    console.log("[CLIENT INFO] QR code is generated.");
    qrcode.generate(qr, { small: true });
  },
};
