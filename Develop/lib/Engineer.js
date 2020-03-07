// Grabbing 'Employee' class dependency.
const Employee = require("./Employee");

// Create sub-class of 'Engineer' by extending class 'Employee'.
class Engineer extends Employee {
    // Defining subclass parameters
    constructor(name,id,email,role,github) {
        // Grabbing superclass parameters as dependencies
        super(name,id,email,role);
        this.github = github;
    };
    // Console out the subclass parameters.
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
        console.log(`role: ${this.role}`);      
        console.log(`github: ${this.github}`);      
    };
    getRole() {
        return this.role;
    };
    getGithub() {
        return this.github;
    };
};

// Creating constant for each engineer.
const engineer = new Engineer();

// Console out the engineer's parameters.
engineer.printInfo();

module.exports = Engineer;

