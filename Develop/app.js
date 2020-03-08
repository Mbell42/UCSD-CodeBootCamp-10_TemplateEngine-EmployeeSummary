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
// const writeFileAsync = util.promisify(fs.writeFile);

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const newEmployee = () => {
    inquirer.prompt([
        // Prompts requesting info about common Team Member details.
        {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is this employee's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is this employee's email address?"
        },
        {
        type: "checkbox",
        message: "What is this employee's role?",
        name: "role",
        choices: [
            "Manager",
            "Engineer", 
            "Intern"
            ]
        }
    ])
    // .then( (response) => {
    //     // After user has answered all prompts, then...
    //     // Console Log user's answers
    //     console.log(response);
    //     // Create objects for each team member.
        
    //     // Create array to contain all employee objects.
    //     // const employees = {
            
    //     // };
    //     console.log("employees: \n" + employees);
    // })
    .then(function(response) {
        const employeeName = response.name;
        const employeeId = response.id;
        const emplyeeEmail = response.email;
        const employeeRole = response.role;
        console.log(employeeRole);
        

        const filename = "./employees/employee_" + employeeName.toLowerCase().split(' ').join('') + ".json";
        
        fs.appendFile(filename, JSON.stringify(response, null, '\t'), function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Successfully added Employee!");
            // After user has answered all prompts, then...
            // Console Log user's answers
            console.log(response);
            console.log(filename + "\n");
            function addRoleInfo() {
                switch (employeeRole) {
                    case "Manager":
                        // Prompt requesting info about case-specific Team Member details.
                        inquirer.prompt([
                            {
                                type: "input",
                                name: "officeNumber",
                                message: "What is this Team Manager's office number?"
                            }]).then(function(response) {
                                    fs.appendFile(filename, JSON.stringify(response, null, '\t'), function(err) {
                                        if (err) {
                                            return console.log(err);
                                        }
                                        console.log("Successfully added Managers office number!");
                                        // After user has answered all prompts, then...
                                        // Console Log user's answers
                                        console.log(response);
                                    });
                                })
                                .catch(err => {
                                    if (err) console.log(err); 
                                }); 
        
                    case "Engineer":
                        // Prompt requesting info about case-specific Team Member details.
                        inquirer.prompt([
                            {
                                type: "input",
                                name: "github",
                                message: "What is this Engineer's github?"
                            }]).then(function(response) {
                                fs.appendFile(filename, JSON.stringify(response, null, '\t'), function(err) {
                                    if (err) {
                                        return console.log(err);
                                    }
                                    console.log("Successfully added Engineer's GitHub!");
                                    // After user has answered all prompts, then...
                                    // Console Log user's answers
                                    console.log(response);
                                });
                            })
                            .catch(err => {
                                if (err) console.log(err); 
                            }); 
        
                    case "Intern":
                        // Prompt requesting info about case-specific Team Member details.
                        inquirer.prompt([
                            {
                                type: "input",
                                name: "school",
                                message: "What is this Intern's school?"
                            }]).then(function(response) {
                                fs.appendFile(filename, JSON.stringify(response, null, '\t'), function(err) {
                                    if (err) {
                                        return console.log(err);
                                    }
                                    console.log("Successfully added Intern's school!");
                                    // After user has answered all prompts, then...
                                    // Console Log user's answers
                                    console.log(response);
                                });
                            })
                            .catch(err => {
                                if (err) console.log(err); 
                            }); 
                    default : 
                        console.log("Employee must have a valid role!");
                }
            };
            addRoleInfo();
        })             
            
    })
    .catch(err => {
        if (err) console.log(err); 
    });     
};

// const newRole = () => {
//     // Grabbing newly created employee as dependency
//     readFileAsync("./employees/employee_" + employeeName.toLowerCase().split(' ').join(''), "utf8").then(function(data) {
//         // Parse the JSON string to an object
//         const employee = JSON.parse(data);                    
//         // Based on employee's role, prompt the following in each case.
//         switch (employee.role) {
//             case "Manager":
//                 // Prompt requesting info about case-specific Team Member details.
//                 inquirer.prompt([
//                     {
//                         type: "input",
//                         name: "officeNumber",
//                         message: "What is this Team Manager's office number?"
//                     }]).then(function(response) {
//                             const filename = "./employees/employee_" + response.officeNumber.toLowerCase().split(' ').join('') + ".json";
//                             fs.appendFile(filename, JSON.stringify(response, null, '\t'), function(err) {
//                                 if (err) {
//                                     return console.log(err);
//                                 }
//                                 console.log("Successfully added Managers office number!");
//                                 // After user has answered all prompts, then...
//                                 // Console Log user's answers
//                                 console.log(response);
//                             });
//                         })
//                         .catch(err => {
//                             if (err) console.log(err); 
//                         }); 

//             case "Engineer":
//                 // Prompt requesting info about case-specific Team Member details.
//                 inquirer.prompt([
//                     {
//                         type: "input",
//                         name: "github",
//                         message: "What is this Engineer's github?"
//                     }]).then(function(response) {
//                         const filename = "./employees/employee_" + response.github.toLowerCase().split(' ').join('') + ".json";
//                         fs.appendFile(filename, JSON.stringify(response, null, '\t'), function(err) {
//                             if (err) {
//                                 return console.log(err);
//                             }
//                             console.log("Successfully added Engineer's GitHub!");
//                             // After user has answered all prompts, then...
//                             // Console Log user's answers
//                             console.log(response);
//                         });
//                     })
//                     .catch(err => {
//                         if (err) console.log(err); 
//                     }); 

//             case "Intern":
//                 // Prompt requesting info about case-specific Team Member details.
//                 inquirer.prompt([
//                     {
//                         type: "input",
//                         name: "school",
//                         message: "What is this Intern's school?"
//                     }]).then(function(response) {
//                         const filename = "./employees/employee_" + response.school.toLowerCase().split(' ').join('') + ".json";
//                         fs.appendFile(filename, JSON.stringify(response, null, '\t'), function(err) {
//                             if (err) {
//                                 return console.log(err);
//                             }
//                             console.log("Successfully added Intern's school!");
//                             // After user has answered all prompts, then...
//                             // Console Log user's answers
//                             console.log(response);
//                         });
//                     })
//                     .catch(err => {
//                         if (err) console.log(err); 
//                     }); 
//                 }
//             console.log(employee); 
//         });
    
// };

// When program first runs, user will be prompted with above questions.
newEmployee();
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




