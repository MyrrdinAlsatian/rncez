const chalk = require('chalk');
const deepKeys = require('deep-keys');
const { prompt } = require('inquirer');
const { merge } = require('lodash');
const { accessSync, constants, outputFileSync, readFileSync } = require('fs-extra');

// rncez Config file questions.

// --- project level questions.

const projectLevelQuestions = [
  {
    type: 'confirm',
    name: 'usesTypeScript',
    message: 'Does this project use TypeScript?',
  },
  {
    type: 'confirm',
    name: 'usesCssModule',
    message: 'Does this project use CSS modules?',
  },
  {
    type: 'list',
    name: 'cssPreprocessor',
    message: 'Does this project use a CSS Preprocessor?',
    choices: ['css', 'scss', 'less', 'styl'],
  },
  {
      type: 'list',
      name: 'testFolder',
      message: 'Do you want to have a test folder in your component?',
      choices: ['__test__','test',' None' ]
  },
  {
    type: 'list',
    name: 'testLibrary',
    message: 'What testing library does your project use?',
    choices: ['Testing Library', 'Enzyme', 'None'],
  }
];

// --- component level questions.

const componentLevelQuestions = [
  {
    type: 'input',
    name: 'component.default.path',
    message: 'Set the default path directory to where your components will be generated in?',
    default: () => 'src/components',
  },
  {
    type: 'confirm',
    name: 'component.default.withStyle',
    message: 'Would you like to create a corresponding stylesheet file with each component you generate?',
  },
  {
    type: 'confirm',
    name: 'component.default.withTest',
    message: 'Would you like to create a corresponding test file with each component you generate?',
  },
  {
    type: 'confirm',
    name: 'component.default.withStory',
    message: 'Would you like to create a corresponding story with each component you generate?',
  },
  {
    type: 'confirm',
    name: 'component.default.withLazy',
    message:
      'Would you like to create a corresponding lazy file (a file that lazy-loads your component out of the box and enables code splitting: https://reactjs.org/docs/code-splitting.html#code-splitting) with each component you generate?',
  },
  {
    type: 'confirm',
    name: 'component.default.withJSON',
    message: 'Do you want to use Package.json to tag your component?',
  },
];

// --- merge all questions together.

const grcConfigQuestions = [...projectLevelQuestions, ...componentLevelQuestions];

async function createCLIConfigFile() {
  try {
    console.log();
    console.log(
      chalk.cyan(
        '--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------'
      )
    );
    console.log(
      chalk.cyan("It looks like this is the first time that you're running RNCEZ within this project.")
    );
    console.log();
    console.log(
      chalk.cyan(
        'Answer a few questions to customize rncez-config-cli for your project needs (this will create a "rncez-config-cli.json" config file on the root level of this project).'
      )
    );
    console.log(
      chalk.cyan(
        '--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------'
      )
    );
    console.log();

    const answers = await prompt(grcConfigQuestions);

    outputFileSync('rncez-config-cli.json', JSON.stringify(answers, null, 2));

    console.log();
    console.log(
      chalk.cyan(
        'The "rncez-config-cli.json" config file has been successfully created on the root level of your project.'
      )
    );

    console.log('');
    console.log(chalk.cyan('You can always go back and update it as needed.'));
    console.log('');
    console.log(chalk.cyan('Happy Hacking!'));
    console.log('');
    console.log('');

    return answers;
  } catch (e) {
    console.error(chalk.red.bold('ERROR: Could not create a "rncez-config-cli.json" config file.'));
    return e;
  }
}

// --- update config file.

async function updateCLIConfigFile(missingConfigQuestions, currentConfigFile) {
  try {
    console.log('');
    console.log(
      chalk.cyan(
        '------------------------------------------------------------------------------------------------------------------------------'
      )
    );
    console.log(
      chalk.cyan(
        'Generate React CLI has been updated and has a few new features from the last time you ran it within this project.'
      )
    );
    console.log('');
    console.log(chalk.cyan('Please answer a few questions to update the "rncez-config-cli.json" config file.'));
    console.log(
      chalk.cyan(
        '------------------------------------------------------------------------------------------------------------------------------'
      )
    );
    console.log('');

    const answers = await prompt(missingConfigQuestions);
    const updatedAnswers = merge({}, currentConfigFile, answers);

    outputFileSync('rncez-config-cli.json', JSON.stringify(updatedAnswers, null, 2));

    console.log();
    console.log(chalk.cyan('The ("rncez-config-cli.json") has successfully updated for this project.'));

    console.log();
    console.log(chalk.cyan('You can always go back and manually update it as needed.'));
    console.log();
    console.log(chalk.cyan('Happy Hacking!'));
    console.log();
    console.log();

    return updatedAnswers;
  } catch (e) {
    console.error(chalk.red.bold('ERROR: Could not update the "rncez-config-cli.json" config file.'));
    return e;
  }
}

// --- get the config file if he exist

async function getCLIConfigFile() {
  // --- Make sure the cli commands are running from the root level of the project

  try {
    accessSync('./package.json', constants.R_OK);

    // --- Check to see if the config file exists

    try {
      accessSync('./rncez-config-cli.json', constants.R_OK);
      const currentConfigFile = JSON.parse(readFileSync('./rncez-config-cli.json'));

      /**
       *  Check to see if there's a difference between grcConfigQuestions and the currentConfigFile.
       *  If there is, update the currentConfigFile with the missingConfigQuestions.
       */

      const missingConfigQuestions = grcConfigQuestions.filter(
        (question) => !deepKeys(currentConfigFile).includes(question.name)
      );

      if (missingConfigQuestions.length) {
        return await updateCLIConfigFile(missingConfigQuestions, currentConfigFile);
      }

      return currentConfigFile;
    } catch (e) {
      return await createCLIConfigFile();
    }
  } catch (error) {
    console.error(
      chalk.red.bold(
        "ERROR: Please make sure that you're running the rncez-config-cli commands from the root level of your project"
      )
    );
    return process.exit(1);
  }
}

module.exports = {
  componentLevelQuestions,
  getCLIConfigFile,
};