//const { rules } = require("eslint-config-prettier");

// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"], // Extendemos expo de prettier
  plugins: ["prettier"], // Agregamos prettier como plugin
  // Agregamos en reglas, que todas las reglas de prettier nos den un error
  rules: {
    "pretier/prettier": "error",
  },
};
