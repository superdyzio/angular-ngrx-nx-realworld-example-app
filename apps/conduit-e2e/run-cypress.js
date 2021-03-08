const cypress = require('cypress');

cypress
  .run({
    spec: 'src/integration/app.spec.ts',
    configFile: 'cypress.json',
    env: {
      tsConfig: 'tsconfig.e2e.json',
    },
  })
  .then(results => {
    console.log(results);
  })
  .catch(err => {
    console.error(err);
  });
