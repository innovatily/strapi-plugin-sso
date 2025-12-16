"use strict";
const react = require("react");
const jsxRuntime = require("react/jsx-runtime");
const icons = require("@strapi/icons");
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const name$1 = "strapi-plugin-sso";
const version = "1.0.7";
const description = "Plug-in for single sign-on with Strapi!";
const strapi = {
  displayName: "Single Sign On",
  name: "strapi-plugin-sso",
  description: "Version 5 enables single sign-on",
  kind: "plugin"
};
const scripts = {
  build: "strapi-plugin build",
  watch: "strapi-plugin watch",
  "watch:link": "strapi-plugin watch:link",
  verify: "strapi-plugin verify",
  test: "jest",
  lint: "eslint",
  prepare: "npm run build"
};
const keywords = [
  "strapi",
  "plugin",
  "oauth",
  "SSO",
  "Google",
  "Cognito"
];
const peerDependencies = {
  "@strapi/strapi": "^5.24.1"
};
const dependencies = {
  "@strapi/design-system": "^2.0.0-rc.11",
  "@strapi/icons": "^2.0.0-rc.11",
  "@strapi/utils": "^5.24.1",
  axios: "^1.8.4",
  "generate-password": "^1.7.1",
  "pkce-challenge": "^3.1.0",
  react: "^18.0.0",
  "react-dom": "^18.0.0",
  "react-intl": "^6.0.0",
  "react-router-dom": "^6.0.0",
  "styled-components": "^6.0.0"
};
const author = {
  name: "yasudacloud",
  url: "https://github.com/yasudacloud/strapi-plugin-sso"
};
const repository = {
  type: "git",
  url: "https://github.com/yasudacloud/strapi-plugin-sso"
};
const bugs = {
  url: "https://github.com/yasudacloud/strapi-plugin-sso/issues"
};
const maintainers = [
  {
    name: "yasudacloud"
  }
];
const engines = {
  node: ">=18.0.0 <=22.x.x",
  npm: ">=8.6.0"
};
const files = [
  "dist"
];
const license = "MIT";
const devDependencies = {
  "@strapi/sdk-plugin": "^5.2.0",
  eslint: "^9.0.0",
  globals: "^15.9.0",
  jest: "^29.3.1"
};
const jest = {
  testPathIgnorePatterns: [
    "/node_modules/",
    ".tmp",
    "dist",
    ".cache"
  ],
  testEnvironment: "node"
};
const exports$1 = {
  "./package.json": "./package.json",
  "./strapi-admin": {
    source: "./admin/src/index.js",
    "import": "./dist/admin/index.mjs",
    require: "./dist/admin/index.js",
    "default": "./dist/admin/index.js"
  },
  "./strapi-server": {
    source: "./server/index.js",
    "import": "./dist/server/index.mjs",
    require: "./dist/server/index.js",
    "default": "./dist/server/index.js"
  }
};
const pluginPkg = {
  name: name$1,
  version,
  description,
  strapi,
  scripts,
  keywords,
  peerDependencies,
  dependencies,
  author,
  repository,
  bugs,
  maintainers,
  engines,
  files,
  license,
  devDependencies,
  jest,
  exports: exports$1
};
const pluginId = pluginPkg.name.replace(/^@strapi\/plugin-/i, "");
const getTranslation = (id) => `${pluginId}.${id}`;
const Initializer = ({ setPlugin }) => {
  const ref = react.useRef();
  ref.current = setPlugin;
  react.useEffect(() => {
    ref.current(pluginId);
  }, []);
  return null;
};
const PluginIcon = () => /* @__PURE__ */ jsxRuntime.jsx(icons.Lock, {});
const name = pluginPkg.strapi.displayName;
const index = {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: name
      },
      Component: async () => {
        return await Promise.resolve().then(() => require("./index-CKkkPkUS.js"));
      },
      permissions: [{ action: "plugin::strapi-plugin-sso.read", subject: null }]
    });
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      name
    });
  },
  bootstrap(app) {
  },
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/en.json": () => Promise.resolve().then(() => require("./en-BbQ9XzfO.js")), "./translations/fr.json": () => Promise.resolve().then(() => require("./fr-C8Qw4iPZ.js")), "./translations/ja.json": () => Promise.resolve().then(() => require("./ja-B2WcMFA2.js")) }), `./translations/${locale}.json`, 3).then(({ default: data }) => {
          const newData = Object.fromEntries(
            Object.entries(data).map(([key, value]) => [getTranslation(key), value])
          );
          return {
            data: newData,
            locale
          };
        }).catch(() => {
          return {
            data: {},
            locale
          };
        });
      })
    );
    return Promise.resolve(importedTrads);
  }
};
exports.index = index;
exports.pluginId = pluginId;
