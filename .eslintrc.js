module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true
      // broser, JS, nodejs에서 eslint를 사용하는 걸 허용
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module"
    },
    rules: {
      "no-console": "off"
    }
  };