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