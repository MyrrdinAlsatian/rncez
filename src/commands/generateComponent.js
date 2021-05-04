const { upperFirst } = require('lodash');

const {
  generateComponent,
  getComponentByType,
  getCorrespondingComponentFileTypes,
} = require('../utils/gnrcComponentUtils');

function initGenerateComponentCommand(args, cliConfigFile, program) {
  const selectedComponentType = getComponentByType(args, cliConfigFile);

  const componentCommand = program
    .command('create [names...]')
    .alias('c')

    // Static component command option defaults.

    .option('-p, --path <path>', 'The path where the component will get generated in.', selectedComponentType.path)
    .option(
      '--type <type>',
      'You can pass a component type that you have configured in your GRC config file.',
      'default'
    );

  // Dynamic component command option defaults.

  const dynamicOptions = getCorrespondingComponentFileTypes(selectedComponentType);

  dynamicOptions.forEach((dynamicOption) => {
    componentCommand.option(
      `--${dynamicOption} <${dynamicOption}>`,
      `With corresponding ${dynamicOption.split('with')[1]} file.`,
      selectedComponentType[dynamicOption]
    );
  });

  // Component command action.

  componentCommand.action((componentNames, cmd) =>
    componentNames.forEach((componentName) => generateComponent(upperFirst(componentName), cmd, cliConfigFile))
  );
}

module.exports = {
  initGenerateComponentCommand,
};
