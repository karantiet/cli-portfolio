#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import boxen from 'boxen';
import { createSpinner } from 'nanospinner';
import inquirer from 'inquirer';
import open from 'open';

const sleep = (ms = 2000): Promise<void> => new Promise((r) => setTimeout(r, ms));

async function welcome(): Promise<void> {
  console.clear();
  const title = figlet.textSync('Karan Chhabra', {
    font: 'ANSI Shadow',
    horizontalLayout: 'fitted',
  });
  
  console.log('\n' + chalk.hex('#FF6B6B').bold(title) + '\n');
  
  const spinner = createSpinner('Loading profile').start();
  await sleep(1000);
  spinner.success({ text: 'Profile loaded!' });
}

function createBox(content: string, title: string, borderColor: string): string {
  return boxen(content, {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: borderColor,
    title: chalk.bold.underline(title),
    titleAlignment: 'center',
    backgroundColor: '#2C2C2C',
    width: 80,
  });
}

const personalDetails = createBox(`
    ${chalk.hex('#FF6B6B').bold('Name')}     ${chalk.hex('#FF6B6B')('Karan Chhabra')}
    ${chalk.hex('#FFD93D').bold('Email')}    ${chalk.hex('#FFD93D')('chhabrakaran299@gmail.com')}
    ${chalk.hex('#4ECDC4').bold('Student')}  ${chalk.hex('#4ECDC4')('Thapar Institute of Engineering & Technology')}
    ${chalk.hex('#4D96FF').bold('City')}     ${chalk.hex('#4D96FF')('Ludhiana')}
`, '🚀 PERSONAL DETAILS', '#FF6B6B');

const skills = createBox(`
    ${chalk.hex('#FF6B6B').bold('LANGUAGES')}
    ${chalk.hex('#FF6B6B')('C++, Python, TypeScript, JavaScript')}
    
    ${chalk.hex('#6BCB77').bold('FRAMEWORKS')}
    ${chalk.hex('#6BCB77')('React, NextJs')}
    
    ${chalk.hex('#FFD93D').bold('TECHNOLOGIES')}
    ${chalk.hex('#FFD93D')('Express, NodeJs, WebSocket')}
    
    ${chalk.hex('#4D96FF').bold('DATABASES')}
    ${chalk.hex('#4D96FF')('MongoDB, SQL')}
    
    ${chalk.hex('#4ECDC4').bold('DEVOPS')}
    ${chalk.hex('#4ECDC4')('Github Actions, AWS')}

    ${chalk.hex('#F7FFF7').bold('TOOLS')}
    ${chalk.hex('#F7FFF7')('GIT, Github, VS Code, Power BI')}
    
    ${chalk.hex('#FF6B6B').bold('FUNDAMENTALS')}
    ${chalk.hex('#FF6B6B')('Data Structures, Algorithms, OOP, DBMS, OS')}
`, '🛠️ SKILLS', '#4ECDC4');

const message = createBox(`
    ${chalk.hex('#F7FFF7').bold('🌟 Elevate Your Projects with Me 🌟')}

    ${chalk.hex('#FFD93D')('✨ Expertise in Full-Stack Development & Automation')}
    ${chalk.hex('#6BCB77')('✨ Strong Leadership & Team Collaboration Skills ')}
    ${chalk.hex('#4D96FF')('✨ Proficient in Cloud Platforms')}
    
    ${chalk.hex('#FF6B6B').italic('Ready to bring your ideas to life and drive your company to new heights!')}
    
    ${chalk.hex('#4ECDC4')('Let\'s collaborate and create something amazing together.')}
    ${chalk.hex('#F7FFF7').bold('Thank you for exploring my CLI portfolio!')}
`, '💼 LET\'S CONNECT', '#6BCB77');

type Action = 'github' | 'website' | 'email' | 'linkedin' | 'twitter' | 'exit';

async function showMenu(): Promise<void> {
  const choices: { name: string; value: Action }[] = [
    { name: chalk.hex('#FFD93D')('👀 View GitHub Profile'), value: 'github' },
        { name: chalk.hex('#6BCB77')('🌐 Connect On Social'), value: 'website' },
        { name: chalk.hex('#4D96FF')('📧 Send Email'), value: 'email' },
        { name: chalk.hex('#FF69B4')('🔗 Visit LinkedIn Profile'), value: 'linkedin' },
        { name: chalk.hex('#FF6B6B')('👋 Exit'), value: 'exit' }
  ];

  const { action } = await inquirer.prompt<{ action: Action }>([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: choices
    }
  ]);

  switch (action) {
    case 'github':
            await open('https://github.com/karantiet');
            break;
        case 'website':
            await open('https://www.instagram.com/karan__chhabra_/');
            break;
        case 'email':
            await open('mailto:chhabrakaran299@gmail.com');
            break;
        case 'linkedin':
            await open('https://www.linkedin.com/in/chhabra-karan/');
            break;
        case 'twitter':
            await open('');
            break;
        case 'exit':
            console.log(chalk.hex('#4ECDC4')('Thanks for visiting! Goodbye!'));
            process.exit(0);
  }

  await showMenu();
}

async function main(): Promise<void> {
  await welcome();
  console.log(personalDetails);
  await sleep(300);
  console.log(skills);
  await sleep(300);
  console.log(message);
  await sleep(300);
  await showMenu();
}

main().catch(console.error);