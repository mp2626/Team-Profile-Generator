const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");

let teamComplete = false;

const commonPrompt = () => {
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
        ])
}

const teamMemberPrompt = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "Please select your next team member to create, or finalise your team by selecting complete team",
                choices: ["Manager", "Engineer", "Intern", "Complete Team"]
            }
        ])
}

function concatEmployeeInfo(dataOne, dataTwo) {
    return Object.assign(dataOne, dataTwo);
}

async function buildTeamArray() {

    while (teamComplete === false) {
        let choice = await teamMemberPrompt();
        console.log(choice.role);
        if (choice.role !== "Complete Team") {
            switch (choice.role) {
                case "Manager":
                    const manager = await commonPrompt()
                    const managerDetails = await inquirer.prompt([
                        {
                            type: "input",
                            message: "Please enter your contact number:",
                            name: "number"
                        },
                    ])
                    let managerComplete = concatEmployeeInfo(manager, managerDetails);
                    console.log(managerComplete)
                    break
                case "Engineer":
                case "Intern":
                case "Complete":

            }
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
        await buildTeamArray();
        // const manager = await managerPrompt();
        // employees.push({ 'Manager': manager });
        // console.log(manager);
        // buildTeamArray();
    } catch (e) {
        console.log(e);
    }
}

init();