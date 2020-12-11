const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Janitor = require('./lib/janitor');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const outputPath = path.resolve(__dirname, 'output', 'team.html');

const render = require('./output/htmlRenderer');

const teamMembers = [];
const idArray = [];

function appMenu() {
	function createManager() {
		console.log('Please build your team');
		inquirer
			.prompt([
				{
					type: 'input',
					name: 'managerName',
					message: "What is your manager's name?",
					validate: answer => {
						if (answer !== '') {
							return true;
						}
						return 'Please enter at least one character.';
					}
				},
				{
					type: 'input',
					name: 'managerId',
					message: "What is your manager's id?",
					validate: answer => {
						const pass = answer.match(
							// Regex:
							// /->open; start of reg expression
							// ^->beginning; matches beginning of string
							// []->character set
							// [1-9]->match a char in range 1-9
							// d->digit; matches any digit 1-9
							// *->asterisk; match 0 or more of preceding token
							// $->end; matches end of string
							// /->close; finish of reg expression
							// Answer must be input as non-negative integers 1-9
							/^[1-9]\d*$/
						);
						if (pass) {
							return true;
						}
						return 'Please enter a positive number greater than zero.';
					}
				},
				{
					type: 'input',
					name: 'managerEmail',
					message: "What is your manager's email?",
					validate: answer => {
						const pass = answer.match(
							// Regex:
							// /->open; start of email address
							// \S->not whitespace; user email name
							// +->plus; combine user email with @
							// @->@; matches @ symbol for email address
							// \S->not whitespace; email client name
							// +->plus; combine email client name with "."
							// \.->escaped char; matches "." char for email
							// \S->not whitespace; email client domain
							// +->plus; match one or more of preceding token
							// /->close; finish of email address
							/\S+@\S+\.\S+/
						);
						if (pass) {
							return true;
						}
						return 'Please enter a valid email address.';
					}
				},
				{
					type: 'input',
					name: 'managerOfficeNumber',
					message: "What is your manager's office number?",
					validate: answer => {
						const pass = answer.match(/^[1-9]\d*$/);
						if (pass) {
							return true;
						}
						return 'Please enter a positive number greater than zero.';
					}
				}
			])
			.then(answers => {
				const manager = new Manager(
					answers.managerName,
					answers.managerId,
					answers.managerEmail,
					answers.managerOfficeNumber
				);
				teamMembers.push(manager);
				idArray.push(answers.managerId);
				createTeam();
			});
	}

	function createTeam() {
		inquirer
			.prompt([
				{
					type: 'list',
					name: 'memberChoice',
					message: 'Which type of team member would you like to add?',
					choices: [
						'Engineer',
						'Intern',
						'Janitor',
						"I don't want to add any more team members"
					]
				}
			])
			.then(userChoice => {
				switch (userChoice.memberChoice) {
					case 'Engineer':
						addEngineer();
						break;
					case 'Intern':
						addIntern();
						break;
					case 'Janitor':
						addJanitor();
						break;
					default:
						buildTeam();
				}
			});
	}

	function addEngineer() {
		inquirer
			.prompt([
				{
					type: 'input',
					name: 'engineerName',
					message: "What is your engineer's name?",
					validate: answer => {
						if (answer !== '') {
							return true;
						}
						return 'Please enter at least one character.';
					}
				},
				{
					type: 'input',
					name: 'engineerId',
					message: "What is your engineer's id?",
					validate: answer => {
						const pass = answer.match(/^[1-9]\d*$/);
						if (pass) {
							if (idArray.includes(answer)) {
								return 'This ID is already taken. Please enter a different number.';
							} else {
								return true;
							}
						}
						return 'Please enter a positive number greater than zero.';
					}
				},
				{
					type: 'input',
					name: 'engineerEmail',
					message: "What is your engineer's email?",
					validate: answer => {
						const pass = answer.match(/\S+@\S+\.\S+/);
						if (pass) {
							return true;
						}
						return 'Please enter a valid email address.';
					}
				},
				{
					type: 'input',
					name: 'engineerGithub',
					message: "What is your engineer's GitHub username?",
					validate: answer => {
						if (answer !== '') {
							return true;
						}
						return 'Please enter at least one character.';
					}
				}
			])
			.then(answers => {
				const engineer = new Engineer(
					answers.engineerName,
					answers.engineerId,
					answers.engineerEmail,
					answers.engineerGithub
				);
				teamMembers.push(engineer);
				idArray.push(answers.engineerId);
				createTeam();
			});
	}

	function addIntern() {
		inquirer
			.prompt([
				{
					type: 'input',
					name: 'internName',
					message: "What is your intern's name?",
					validate: answer => {
						if (answer !== '') {
							return true;
						}
						return 'Please enter at least one character.';
					}
				},
				{
					type: 'input',
					name: 'internId',
					message: "What is your intern's id?",
					validate: answer => {
						const pass = answer.match(/^[1-9]\d*$/);
						if (pass) {
							if (idArray.includes(answer)) {
								return 'This ID is already taken. Please enter a different number.';
							} else {
								return true;
							}
						}
						return 'Please enter a positive number greater than zero.';
					}
				},
				{
					type: 'input',
					name: 'internEmail',
					message: "What is your intern's email?",
					validate: answer => {
						const pass = answer.match(/\S+@\S+\.\S+/);
						if (pass) {
							return true;
						}
						return 'Please enter a valid email address.';
					}
				},
				{
					type: 'input',
					name: 'internSchool',
					message: "What is your intern's school?",
					validate: answer => {
						if (answer !== '') {
							return true;
						}
						return 'Please enter at least one character.';
					}
				}
			])
			.then(answers => {
				const intern = new Intern(
					answers.internName,
					answers.internId,
					answers.internEmail,
					answers.internSchool
				);
				teamMembers.push(intern);
				idArray.push(answers.internId);
				createTeam();
			});
	}

	function addJanitor() {
		inquirer
			.prompt([
				{
					type: 'input',
					name: 'janitorName',
					message: "What is your janitor's name?",
					validate: answer => {
						if (answer !== '') {
							return true;
						}
						return 'Please enter at least one character.';
					}
				},
				{
					type: 'input',
					name: 'janitorId',
					message: "What is your janitor's id?",
					validate: answer => {
						const pass = answer.match(/^[1-9]\d*$/);
						if (pass) {
							if (idArray.includes(answer)) {
								return 'This ID is already taken. Please enter a different number.';
							} else {
								return true;
							}
						}
						return 'Please enter a positive number greater than zero.';
					}
				},
				{
					type: 'input',
					name: 'janitorEmail',
					message: "What is your janitor's email?",
					validate: answer => {
						const pass = answer.match(/\S+@\S+\.\S+/);
						if (pass) {
							return true;
						}
						return 'Please enter a valid email address.';
					}
				},
				{
					type: 'input',
					name: 'janitorTask',
					message: "What is your janitor's favorite task?",
					validate: answer => {
						if (answer !== '') {
							return true;
						}
						return 'Please enter at least one character.';
					}
				}
			])
			.then(answers => {
				const janitor = new Janitor(
					answers.janitorName,
					answers.janitorId,
					answers.janitorEmail,
					answers.janitorTask
				);
				teamMembers.push(janitor);
				idArray.push(answers.janitorId);
				createTeam();
			});
	}

	function buildTeam() {
		fs.writeFileSync(outputPath, render(teamMembers), 'utf-8');
	}

	createManager();
}

appMenu();
