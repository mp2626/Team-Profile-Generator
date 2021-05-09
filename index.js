const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");

let employees = [];
let teamComplete = false;

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
        ])
}

const teamMemberPrompt = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "Please select your next team member to create, or finalise your team by selecting complete team",
                choices: ["Engineer", "Intern", "Complete Team"]
            }
        ])
}

async function buildTeamArray() {

    while (teamComplete === false) {
        let choice = await teamMemberPrompt();
        if (choice !== "Complete Team") {
            console.log("team member")
        }
        else {
            teamComplete = true;
            console.log("team complete")
        }
    }
}

// const teamPrompt = () => {

//     while (teamComplete === false) {

//         teamMember()

//     }
// }

//             .then([
//     {
//         type: "input",
//         message: "Please enter your name:",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "Please enter your ID:",
//         name: "ID"
//     },

//     {
//         type: "input",
//         message: "Please enter your email address:",
//         name: "email"
//     },
//     {
//         type: "input",
//         message: "Please enter your contact number:",
//         name: "email"
//     },
//     {
//         type: "list",
//         name: "role",
//         message: "Please select your next team member to create, or finalise your team by selecting complete team",
//         choices: ["Engineer", "Intern", "Complete Team"]
//     }
// ])
//     }

// }

async function init() {
    try {
        const manager = await managerPrompt();
        employees.push({ 'Manager': manager });
        console.log(manager);
        buildTeamArray();
    } catch (e) {
        console.log(e);
    }
}

init();