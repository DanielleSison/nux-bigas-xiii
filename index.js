// Node Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');


// Team Employee Constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');

const render = require('./src/page-template.js');

// Create empty arrays for team and id as place holders
const teamArr = [];
const idArr = [];


// Start the application
function initApp() {

    // Prompt user to create a manager when application starts
    function addManager() {
        console.log("Start building your team profile");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Provide team manager name.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the manager name.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Provide team manager ID.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid Manager's ID.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Provide team manager e-mail.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "E-mail address must be provided.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Provide the team manager's phone number.",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid phone number.";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArr.push(manager);
            idArr.push(answers.managerId);
            addTeam();
        });
    }

    // addTeam function - adds aditional team members after manager is provided
    function addTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What would you like to add next?",
                choices: [
                    "Engineer",
                    "Intern",
                    "End application"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    generateHTML();
            }
        });
    }

    // Prompts the user to add Engineer details when selected
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Provide the team engineer's name.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Engineer name must be provided.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "Provide the engineer's ID.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid Engineer's ID.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Provide the engineer's e-mail address",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "E-mail address must be provided.";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Provide the engineer's GitHub username.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "GitHub username must be provided.";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArr.push(engineer);
            idArr.push(answers.engineerId);
            addTeam();
        });
    }

    // Prompts the user to add Intern details when selected
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Provide the intern's name.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Intern name must be provided.";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "Provide the intern's ID.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid Intern's ID.";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "Provide the intern's e-mail address.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "E-mail address must be provided";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "Please provide intern's university name.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "University / School name must be provided.";
                }
            }

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArr.push(intern);
            idArr.push(answers.internId);
            addTeam();
        });
    }
    
    function generateHTML() {

        // Create directory for index.html file if it unavailable
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR)
        }
        console.log("Team profile generated.");
        fs.writeFileSync(outputPath, render(teamArr), "utf-8");
    }

    addManager();
}

initApp();