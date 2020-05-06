declare var require: any
export const environment = {
  production: true,
  app_version: require('../../package.json').version
};
