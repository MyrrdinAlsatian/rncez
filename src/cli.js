const program = require('commander');

const pkg = require('../package.json');

const { getCLIConfigFile } = require('./utils/gnrcConfigUtils');
const { initGenerateComponentCommand } = require('./commands/generateComponent');

module.exports = async function cli(args) {
  const cliConfigFile = await getCLIConfigFile();

  // Initialize generate component command

  console.log(cliConfigFile);

  initGenerateComponentCommand(args, cliConfigFile, program);

  program.version(pkg.version);
  program.parse(args);
};