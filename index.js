const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

let teamComplete = false;

function genBaseHTML() {
    const baseHTML = `
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" href="./assets/style.css" />
                <title>Team Org Chart</title>
            </head>

            <body>
                <Header>
                    <section class="">
                        <div class="">
                            <div>
                                <div class="col-12 col-md-12">
                                    <h1>Organisation Chart</h1>
                                </div>
                    </section>
                </Header>

                <main>
                    <!-- displays team cards -->
                    <section class="container-fluid">
                        <div id="cards" class="row justify-content-center">`
    fs.writeFile('team.html', baseHTML, (err) => {
        err ? console.log(err) : console.log("based HTML Created");
    });
}

function closeHTML() {
    const closeTeamHTML = `
    </div>
    </section>
        </Main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../index.js"></script>
    </body>
</html>`
    fs.appendFile('team.html', closeTeamHTML, (err) => {
        err ? console.log(err) : console.log("based HTML Created");
    });
}

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
                name: "id"
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
                message: "Please select a team member type to create, or finalise your team by selecting complete team",
                choices: ["Manager", "Engineer", "Intern", "Complete Team"]
            }
        ])
}

function concatEmployeeInfo(dataOne, dataTwo) {
    return Object.assign(dataOne, dataTwo);
}

async function buildTeam() {

    while (teamComplete === false) {
        let choice = await teamMemberPrompt();
        if (choice.role !== "Complete Team") {
            const commonDetails = await commonPrompt()
            let additionalDetails = ""
            switch (choice.role) {
                case "Manager":
                    additionalDetails = await inquirer.prompt([
                        {
                            type: "input",
                            message: "Please enter your contact number:",
                            name: "roleInfo"
                        },
                    ])
                    break
                case "Engineer":
                    additionalDetails = await inquirer.prompt([
                        {
                            type: "input",
                            message: "Please enter your gitHub:",
                            name: "roleInfo"
                        },
                    ])
                    break
                case "Intern":
                    additionalDetails = await inquirer.prompt([
                        {
                            type: "input",
                            message: "Please enter your school details:",
                            name: "roleInfo"
                        },
                    ])
                    break
            }

            const { name, id, email, roleInfo } = concatEmployeeInfo(commonDetails, additionalDetails);
            let teamMemberCard = '';

            switch (choice.role) {
                case "Manager":
                    const newManager = new Manager(name, id, email, roleInfo);
                    teamMemberCard = `
                    <div class="card col-md-11 col-lg-2">
                        <h1 class="card-header"> ${newManager.getRole()} </h1>
                        <div class="card-body">
                        <h2>Name: ${newManager.getName()} </h2>
                        <h2>ID: ${newManager.getId()}</h2>
                        <h2>Email:<a href = "mailto: ${newManager.getEmail()}"> ${newManager.getEmail()}</a></h2>
                        <h2>Contact Number:${newManager.getOfficeNumber()}</h2>
                        </div>
                        </div>
                    `
                    break
                case "Engineer":
                    const newEngineer = new Engineer(name, id, email, roleInfo);
                    teamMemberCard = `
                    <div class="card col-md-11 col-lg-2">
                        <h1 class="card-header">${newEngineer.getRole()} </h1>
                        <div class="card-body">
                        <h2>Name:${newEngineer.getName()} </h2>
                        <h2>ID:${newEngineer.getId()}</h2>
                        <h2>Email:<a href = "mailto: ${newEngineer.getEmail()}"> ${newEngineer.getEmail()}</a></h2>
                        <h2>GitHub Username:<a href ="https://github.com/${newEngineer.getGitHub()}"target = "_blank">${newEngineer.getGitHub()} </a></h2>
                        </div>
                        </div>
                    `
                    break
                case "Intern":
                    const newIntern = new Intern(name, id, email, roleInfo);
                    teamMemberCard = `
                    <div class="card col-md-11 col-lg-2">
                        <h1 class="card-header">${newIntern.getRole()} </h1>
                        <div class="card-body"  >
                        <h2>Name:${newIntern.getName()} </h2>
                        <h2>ID:${newIntern.getId()}</h2>
                        <h2>Email:<a href = "mailto: ${newIntern.getEmail()}"> ${newIntern.getEmail()}</a></h2>
                        <h2>School:${newIntern.getSchool()}</h2>
                        </div>
                        </div>
                    `
                    break
            }

            console.log(teamMemberCard);

            fs.appendFile('team.html', teamMemberCard, (err) => {
                err ? console.log(err) : console.log("Team Member Appended")
            });

        } else {
            teamComplete = true;
            console.log("team complete")
            closeHTML()
            return
        }
    }
}

async function init() {
    try {
        genBaseHTML();
        await buildTeam();
    } catch (e) {
        console.log(e);
    }
}

init();