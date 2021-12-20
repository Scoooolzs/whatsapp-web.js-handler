module.exports = {
  name: "auth_failure",
  async execute(error, client) {
    console.log("[CLIENT ERROR] An error detected in Authentication:\n", error);
  },
};
