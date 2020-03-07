// Grabbing 'Employee' class dependency.
const Employee = require("./Employee");

// Create sub-class of 'Engineer' by extending class 'Employee'.
class Engineer extends Employee {
    // Defining subclass parameters
    constructor(name,id,email,jobTitle,gitHub) {
        // Grabbing superclass parameters as dependencies
        super(name,id,email,jobTitle);
        this.gitHub = gitHub;
    };
    // Console out the subclass parameters.
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`name: ${this.id}`);
        console.log(`name: ${this.email}`);
        console.log(`name: ${this.jobTitle}`);      
        console.log(`name: ${this.gitHub}`);      
    };
};

// Creating constant for each engineer.
const engineer = new Engineer();

// Console out the engineer's parameters.
engineer.printInfo();

module.exports = Engineer;
