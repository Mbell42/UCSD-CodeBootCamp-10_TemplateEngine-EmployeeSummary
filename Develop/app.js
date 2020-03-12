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
// const idArr  = [];

const newTeam = () => {
    // Begin sequence of prompts to user.
    function newManager () {
        // Prompt user for new manager details.
        return inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the managers's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's id?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the managers's email?"
            },
            {
                type: "input",
                name: "managerOffice",
                message: "What is the Manager's office number?"
            }
            // Create new instance of 'manager' subclass and add it to team array.
        ]).then((answers) => {
            console.log("answers: ",answers);
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOffice
            );
            team.push(manager);
            console.log("Team: " + team);
            // Prompt user if team is complete.
            newEmployee();                        
        })
    };
    // Function to prompt user if team is complete.
    function newEmployee() {
        return inquirer.prompt([
            {
                type: "confirm",
                name: "choiceNewEmployee",
                message: "Does this complete the team?",
                default: true
            }
        ]).then((answers) => {
            // If the user answers 'yes' or 'y', then build the team roster,
            // output the teamRoster file, notify the user of the output file location,
            //thank the user for using the application, and then close the application.
            if (answers.choiceNewEmployee === "y" || "yes") {
                console.log("Building Team Roster...");
                render();
                buildTeam();
                console.log("Team Roster built successfully.  The file can be found at the following location: \n"
                    + "", "Thank you for using TeamRoster Pro!");
                process.exit();
            }
            // If the user answers 'no' or 'n' 
            else if (answers.choiceNewEmployee === "n" || "no") {
                newEmployeeInfo();
            }
            // If the user enters any other input, notify the user that they entered an
            //invalid input, and restart 'newEmployee' function.
            else {
                console.log("Invalid input. Please enter 'y' or 'yes' to confirm, 'n' or 'no' to reject.");
                newEmployee();
            }
        })
    };


    // inquirer.prompt([
    //     // Prompts requesting info about common Team Member details.
    //     {
    //     type: "input",
    //     name: "name",
    //     message: "What is the employee's name?"
    //     },
    //     {
    //         type: "input",
    //         name: "id",
    //         message: "What is this employee's id?"
    //     },
    //     {
    //         type: "input",
    //         name: "email",
    //         message: "What is this employee's email address?"
    //     },
    //     {
    //     type: "checkbox",
    //     message: "What is this employee's role?",
    //     name: "role",
    //     choices: [
    //         "Manager",
    //         "Engineer", 
    //         "Intern"
    //         ]
    //     }
    // ])
    // .then(function(response) {
    //     const employeeName = response.name;
    //     const employeeId = response.id;
    //     const emplyeeEmail = response.email;
    //     const employeeRole = response.role;
    //     console.log(employeeRole);
        

    //     const filename = "./employees/employee_" + employeeName.toLowerCase().split(' ').join('') + ".json";
        
    //     fs.appendFile(filename, JSON.stringify(response, null, '\t'), function(err) {
    //         if (err) {
    //             return console.log(err);
    //         }
    //         console.log("Successfully added Employee!");
    //         // After user has answered all prompts, then...
    //         // Console Log user's answers
    //         console.log(response);
    //         console.log(filename + "\n");
    //         function addRoleInfo() {
    //             switch (employeeRole) {
    //                 case "Manager":
    //                     // Prompt requesting info about case-specific Team Member details.
    //                     inquirer.prompt([
    //                         {
    //                             type: "input",
    //                             name: "officeNumber",
    //                             message: "What is this Team Manager's office number?"
    //                         }]).then(function(response) {
    //                                 fs.appendFile(filename, JSON.stringify(response, null, '\t'), function(err) {
    //                                     if (err) {
    //                                         return console.log(err);
    //                                     }
    //                                     console.log("Successfully added Managers office number!");
    //                                     // After user has answered all prompts, then...
    //                                     // Console Log user's answers
    //                                     console.log(response);
    //                                 });
    //                             })
    //                             .catch(err => {
    //                                 if (err) console.log(err); 
    //                             }); 
        
    //                 case "Engineer":
    //                     // Prompt requesting info about case-specific Team Member details.
    //                     inquirer.prompt([
    //                         {
    //                             type: "input",
    //                             name: "github",
    //                             message: "What is this Engineer's github?"
    //                         }]).then(function(response) {
    //                             fs.appendFile(filename, JSON.stringify(response, null, '\t'), function(err) {
    //                                 if (err) {
    //                                     return console.log(err);
    //                                 }
    //                                 console.log("Successfully added Engineer's GitHub!");
    //                                 // After user has answered all prompts, then...
    //                                 // Console Log user's answers
    //                                 console.log(response);
    //                             });
    //                         })
    //                         .catch(err => {
    //                             if (err) console.log(err); 
    //                         }); 
        
    //                 case "Intern":
    //                     // Prompt requesting info about case-specific Team Member details.
    //                     inquirer.prompt([
    //                         {
    //                             type: "input",
    //                             name: "school",
    //                             message: "What is this Intern's school?"
    //                         }]).then(function(response) {
    //                             fs.appendFile(filename, JSON.stringify(response, null, '\t'), function(err) {
    //                                 if (err) {
    //                                     return console.log(err);
    //                                 }
    //                                 console.log("Successfully added Intern's school!");
    //                                 // After user has answered all prompts, then...
    //                                 // Console Log user's answers
    //                                 console.log(response);
    //                             });
    //                         })
    //                         .catch(err => {
    //                             if (err) console.log(err); 
    //                         }); 
    //                 default : 
    //                     console.log("Employee must have a valid role!");
    //             }
    //         };
    //         addRoleInfo();
    //     })             
            
    // })
    // .catch(err => {
    //     if (err) console.log(err); 
    // });     


// When program first runs, user will be prompted with above questions.
// newEmployee();
// newRole();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// render(employees);

// After you have your html, you're no ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// Creating and writing to output file
    function createTeam () {
        fs.writeFileSync(outputPath, render(""), "utf-8");
    };
};
// When program first runs, user will be prompted with above questions.
newTeam();




