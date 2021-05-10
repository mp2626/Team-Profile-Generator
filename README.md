# Team Generator
 
Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.

# User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
# Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

# Features

## Team Question List

This app generates a list of questions that are used to create the team structure. The user can select the team member(s)that they'd like to create from a drop down list and enter their details. The employee card is then added to the HTML file. Once the team is complete, the final version of the HTML file is generated.

![Questions](/images/questions.png)

## HTML Generation

Once the user has answered all the questions, an index.html is generated that displays the team entered by the user. When the user opens the file, they can see the team. When the user clicks an employees email address, a new email screen is created in their default system. When the users click the engineers gitHub name, they are taken to their gitHub page.

![readme](/images/team_page.png)

# Installation

Run the below commands in the terminal:

* node init -y
* npm install
* node install inquirer
* node install jest

# Invoke application

In order to run the application enter 'node index.js' in the terminal.

# Test

There are tests for each class, employee, engineer, inter and manager.

In order to run the tests, enter 'npm test' in the terminal.

# Link to Git Hub and Walk Through Video

https://github.com/mp2626/Team-Profile-Generator

https://drive.google.com/file/d/1LFz9P0liHG-gPIlLY8mwrD-t6Qj9Z-4X/view

# Programming Languages/Packages
 * JavaScript
 * HTML
 * CSS
 * Jest
 * Inquirer

# Authors
Contributor - Michael Perrin

