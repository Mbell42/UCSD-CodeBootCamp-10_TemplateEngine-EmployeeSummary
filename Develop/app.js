const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const render = require("./lib/htmlRenderer");

// Welcome User
console.log("Welcome new User.","Thank you for using TeamRoster Pro!");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// Creating empty arrays for the team and team ids.
const team = [];
const idArr  = [];

const newTeam = () => {
    // Begin sequence of prompts to user.
    function newManager () {
        // Prompt user for new manager details.
        return inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's id?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email?"
            },
            {
                type: "input",
                name: "managerOffice",
                message: "What is the Manager's office number?"
            }
            // Create new instance of 'manager' subclass and add it to team array.
        ]).then((answersManager) => {
            console.log("Manager info: ",
                answersManager.managerName,
                answersManager.managerId,
                answersManager.managerEmail,
                answersManager.managerOffice
            );
            const manager = new Manager(
                answersManager.managerName,
                answersManager.managerId,
                answersManager.managerEmail,
                answersManager.managerOffice
            );
            team.push(manager);
            idArr.push(answersManager.managerId);
            console.log("Team Roster: " + team);
            // Prompt user if team is complete.
            newEmployee();                        
        }).catch((err) => {
            if (err) throw (err);
        });
    };
    // Function to prompt user if team is complete.
    function newEmployee() {
        return inquirer.prompt([
            {
                type: "confirm",
                name: "choiceNewEmployee",
                message: "Would you like to add another employee?",
                default: true
            }
        ]).then((answers) => {
            // If the user answers 'yes', then being new employee prompt
            if (answers.choiceNewEmployee === true) {
                newEmployeeInfo();
                
            }
            // If the user answers 'no', then build the team roster,
            // output the teamRoster file, notify the user of the output file location,
            //thank the user for using the application, and then close the application.
            else {
                console.log("Team is complete!");
                console.log("Building Team Roster...");
                render(team);
                createTeam ();
                console.log("Team Roster built successfully.  The file can be found at the following location: \n"
                    + "/root/develop/output \n", "Thank you for using TeamRoster Pro!");
                process.exit();
            }
            // If the user enters any other input, notify the user that they entered an
            //invalid input, and restart 'newEmployee' function.
            // else {
            //     console.log("Invalid input. Please enter 'y' or 'yes' to confirm, 'n' or 'no' to reject.");
            //     newEmployee();
            // }
        }).catch((err) => {
            if (err) throw (err);
        });
    };
    function newEmployeeInfo() {
        // Prompt user to pick new emplyee's role
        return inquirer.prompt([
            {
                type: "checkbox",
                message: "What is the new employee's role?",
                name: "role",
                choices: [
                    "Engineer",
                    "Intern"
                ],
            }]).then((chosen) => {
                console.log("Employee role: ", chosen);
                // Convert chosen checkbox answer from array to a string.
                const currentRole = chosen.role.toString();
                console.log(currentRole);
                if (currentRole === "Engineer") {
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "engineerName",
                            message: "Enter new Engineer's name"
                        },
                        {
                            type: "input",
                            name: "engineerId",
                            message: "Enter new Engineer's id"
                        },
                        {
                            type: "input",
                            name: "engineerEmail",
                            message: "Enter new Engineer's email"
                        },
                        {
                            type: "input",
                            name: "engineerGithub",
                            message: "Enter new Engineer's github username"
                        }
                        // Create new instance of 'engineer' subclass and add it to team array.
                    ]).then((answersEngineer) => {
                            console.log("Engineer info: ",
                                answersEngineer.engineerName,
                                answersEngineer.engineerId,
                                answersEngineer.engineerEmail,
                                answersEngineer.engineerGithub
                        );
                        const engineer = new Engineer (
                            answersEngineer.engineerName,
                            answersEngineer.engineerId,
                            answersEngineer.engineerEmail,
                            answersEngineer.engineerGithub
                        );
                        team.push(engineer);
                        idArr.push(answersEngineer.engineerId);
                        console.log("Team Roster: " + team);
                        // Prompt user if team is complete.
                        newEmployee();  
                    }).catch((err) => {
                        if (err) throw (err);
                    });
                } else {
                    if (currentRole === "Intern") {
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "internName",
                            message: "Enter new Intern's name"
                        },
                        {
                            type: "input",
                            name: "internId",
                            message: "Enter new Intern's id"
                        },
                        {
                            type: "input",
                            name: "internEmail",
                            message: "Enter new Intern's email"
                        },
                        {
                            type: "input",
                            name: "internSchool",
                            message: "Enter new Intern's school"
                        }
                        // Create new instance of 'intern' subclass and add it to team array.
                    ]).then((answersIntern) => {
                        console.log("Intern info: ",
                            answersIntern.internName,
                            answersIntern.internId,
                            answersIntern.internEmail,
                            answersIntern.internSchool
                        );
                        const intern = new Intern (
                            answersIntern.internName,
                            answersIntern.internId,
                            answersIntern.internEmail,
                            answersIntern.internSchool
                        );
                        team.push(intern);
                        idArr.push(answersIntern.internId);
                        console.log("Team Roster: " + team);
                        // Prompt user if team is complete.
                        newEmployee();  
                    }).catch((err) => {
                        if (err) throw (err);
                    });
                    }
                }
            }).catch((err) => {
                if (err) throw (err);
            });
    };
    // Prompt user for new Manager
    newManager();
// Creating and writing to output file

function createTeam () {
        fs.writeFileSync(outputPath, render(team), "utf-8");
    };
}
// When program first runs, user will be prompted with above questions.
newTeam();


// remaining wants:
// - update the styles in the output .html file.

