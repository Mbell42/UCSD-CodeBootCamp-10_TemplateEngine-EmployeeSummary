// Grabbing 'Employee' class dependency.
const Employee = require("./Employee");

// Create sub-class of 'Intern' by extending class 'Employee'.
class Intern extends Employee {
    // Defining subclass parameters
    constructor(name,id,email,jobTitle,school) {
        // Grabbing superclass parameters as dependencies
        super(name,id,email,jobTitle);
        this.school = school;
    };
    // Console out the subclass parameters.
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`name: ${this.id}`);
        console.log(`name: ${this.email}`);
        console.log(`name: ${this.jobTitle}`);      
        console.log(`name: ${this.school}`);      
    };
};

// Creating constant for each intern.
const intern = new Intern();

// Console out the intern's parameters.
intern.printInfo();

module.exports = Intern;