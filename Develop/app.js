const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function userPrompts() {
    inquirer.prompt([
        // Prompt requesting info about number of Team Members.
        {
        type: "input",
        name: "teamCount",
        message: "How many employees will be assigned to this project?"
        },
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
        message: "What is this employee's job title?",
        name: "jobTitle",
        choices: [
            "Manager",
            "Engineer", 
            "Intern"
        ]
        }
    // Based on employee's jobTitle, prompt the following in each case.
    ]).then(function() {
        switch (jobTitle) {
            case "Manager":
                // Prompt requesting info about case-specific Team Member details.
                inquirer.prompt([
                    {
                        type: "input",
                        name: "office",
                        message: "What is this Team Manager's office number?"
                    }]);
            case "Engineer":
                // Prompt requesting info about case-specific Team Member details.
                inquirer.prompt([
                    {
                        type: "input",
                        name: "gitHub",
                        message: "What is this Engineer's gitHub?"
                    }]);
            case "Intern":
                // Prompt requesting info about case-specific Team Member details.
                inquirer.prompt([
                    {
                        type: "input",
                        name: "school",
                        message: "What is this Intern's school?"
                    }]);
        };
    });
};
// When program first runs, user will be prompted with above questions.
// After user has answered all prompts, then...
userPrompts().then(function(data) {
        // Create objects for each team member.
    const employees = "";
        console.log("employees: \n" + employees);
});
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
render(employees);
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

​

