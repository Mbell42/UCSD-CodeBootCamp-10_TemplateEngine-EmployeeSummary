// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Grabbing 'Employee' class dependency.
const Employee = require("./Employee");

// Create sub-class of 'Engineer' by extending class 'Employee'.
class Engineer extends Employee {
    constructor(gitHub) {
        super(name,id,email,jobTitle);
        this.gitHub = gitHub;
    };
};

// Creating constant for each engineer.
const engineer = new Engineer();

// Console out the engineer's parameters.
engineer.printInfo();

