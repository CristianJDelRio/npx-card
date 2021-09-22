#!/usr/bin/env node

'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const clear = require('clear');

clear();

const data = {
  name: chalk.bold.green('                    Cristian Del Rio'),
  handle: chalk.white('@cristianjdelrio'),
  work: `${chalk.white('Backend Developer at')} ${chalk
    .hex('#cca918')
    .bold('Condor Labs')}`,
  github: chalk.gray('https://github.com/') + chalk.green('cristianjdelrio'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('cristianjdelrio'),
  linkedin:
    chalk.gray('https://linkedin.com/in/') + chalk.blue('cristianjdelrio'),
  web: chalk.cyan('https://cristianjdelrio.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('cristianjdelrio'),

  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.bold(
      "- As Obi Wan says - Hello There! I'm a passionated MERN stack"
    )}`,
    `${chalk.bold(
      "developer, I'm from Colombia and I'm in love with 3 things:"
    )}`,
    ``,
    `${chalk.bold('1. Learning new Things 🧠')}`,
    `${chalk.bold('2. Inviting people to know the tech world 💻')}`,
    `${chalk.bold('3. My family 👪')}`,
  ].join('\n'),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'blue',
  }
);

console.log(me);
