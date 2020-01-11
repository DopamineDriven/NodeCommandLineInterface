# NodeCommandLineInterface

<iframe width="560" height="315" src="https://www.youtube.com/embed/1aqZo6awj38" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Technical Overview

This programe utilizes the node CLI (node command line interface). There are four unique employee classes with one super (parent) class; employee. Each employee class is a constructor defined in the lib folder (manager, engineer, intern, and janitor). These constructors classes also contain functions with template literals (defining HTML in javascript calling variables and functions via interpolation) which simplifies the process of coding. The process is simplified by reducing the total number of files required and by reducing the amount of code ultimately required in the htmlRenderer.js file by making the HTML a function. 

There are five unit tests since there are five total classes (one parent class with four children classes). The parent class is employee; the children classes are engineer, manager, intern, and janitor. The tests are conducted using the command "npm run test"; the jest npm package is required to run these tests. After all five tests passed, the app.js file was created which brings everything together. The app.js file contains the prompts that appear in the CLI when selecting various employee types and defining their name, id, email, and unique class variable. For example, Managers have office numbers, engineers have github accounts, interns have corresponding school names, and janitors have their favorite tasks.  

This program is organized into four subfolders; lib, templates, tests, and output. Rather than having five total HTML files in the templates folder, I decided to use template literals within each class in the lib filder. Template literals utilize a method known as interpolation ${} which allows for variables and functions to be called within the HTML itself. This simplifies the coding process eliminating the need to make as many template calls in the htmlRenderer.js file as you otherwise would. This also makes the code more readable and makes debugging less difficult. 

The team.html file is generated in the output folder. A style.css file was also added to the output folder to polish bootstrap styling called in the html. The generated team roster is uniform and resposive so that it can be viewed as intended on any device. 

# Purpose

As a director/manager I want to be able to generate a uniform roster showcasing my team for clients. This roster should be responsive. A command line interface allows a manager to "plug n chug" by simply inputing values corresponding to their team. This program has no cap on team size. A card is generated for each team member. 

# Validation

This program uses regular expressions for the purpose of validation. This controls which user input is accepted and which isn't for each variable. For example, all IDs must be a string of non-negative integers whereas all email addresses must be username@client.domain

# Portfolio

This project was added to my portfolio: https://dopaminedriven.github.io/portfolio/portfolio.html

## npm packages required
- jest https://www.npmjs.com/package/jest
- inquirer https://www.npmjs.com/package/inquirer
- path https://www.npmjs.com/package/path
- fs https://www.npmjs.com/package/file-system