const path = require('path');

const stepDefinitionsPath = path.resolve(process.cwd(), './src/integration/cucumber');

module.exports = {
  nonGlobalStepDefinitions: true,
  stepDefinitions: stepDefinitionsPath,
  commonPath: `${stepDefinitionsPath}/common`,
};
