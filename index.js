const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");

let employees = [];

const managerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter your name:",
                name: "name"
            },
            {
                type: "input",
                message: "Please enter your ID:",
                name: "ID"
            },

            {
                type: "input",
                message: "Please enter your email address:",
                name: "email"
            },
            {
                type: "input",
                message: "Please enter your contact number:",
                name: "email"
            },
            {
                type: "list",
                name: "role",
                message: "Please select your next team member to create, or finalise your team by selecting complete team",
                choices: ["Engineer", "Intern", "Complete Team"]
            }
        ])
}

async function init() {
    try {
        console.log(manager);
        const manager = await managerPrompt();
        employees.push({ 'Manager': manager });
        console.log(employees);
        console.log(manager.name)
    } catch (e) {
        console.log(e);
    }
}

init();