const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

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
            const commonDetails = await commonPrompt()
            const additionalDetails = ""
            switch (choice.role) {
                case "Manager":
                    additionalDetails = await inquirer.prompt([
                        {
                            type: "input",
                            message: "Please enter your contact number:",
                            name: "number"
                        },
                    ])
                    break
                case "Engineer":
                    additionalDetails = await inquirer.prompt([
                        {
                            type: "input",
                            message: "Please enter your gitHub:",
                            name: "gitHub"
                        },
                    ])
                    break
                case "Intern":
                    additionalDetails = await inquirer.prompt([
                        {
                            type: "input",
                            message: "Please enter your school details:",
                            name: "school"
                        },
                    ])
                    break
                case "Complete":

            }
            const { name, id, email, roleInfo } = concatEmployeeInfo(commonDetails, additionalDetails);
            const newManager = new Manager(name, id, email, roleInfo);
            const newEngineer = new Engineer(name, id, email, roleInfo);
            const newIntern = new Intern(name, id, email, roleInfo);
            console.log(newManager.getName())
            const managerCard = `
                    <div class="card col-md-11 col-lg-2">
                        <h1 class="card-header">${newManager.getRole()}/h1>
                     <div class="card-body">
                        <h2>Name:${newManager.getName()} </h2>
                        <h2>ID:${newManager.getId()}</h2>
                        <h2>Email:${newManager.getEmail()}</h2>
                        <h2>Contact Number:${newManager.getOfficeNumber()}</h2>
                        </div>
                    `
        }
        else {
            teamComplete = true;
            console.log("team complete")
        }
    }
}

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