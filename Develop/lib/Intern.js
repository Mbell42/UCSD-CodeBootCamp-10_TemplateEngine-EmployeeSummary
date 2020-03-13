// Grabbing 'Employee' class dependency.
const Employee = require("./Employee");

// Create sub-class of 'Intern' by extending class 'Employee'.
class Intern extends Employee {
    // Defining subclass parameters
    constructor(name,id,email,school) {
        // Grabbing superclass parameters as dependencies
        super(name,id,email);
        this.school = school;
    };
    // Console out the subclass parameters.
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);     
        console.log(`school: ${this.school}`);      
    };
    getRole() {
        return "Intern";
    };
    getSchool() {
        return this.school;
    };
};

// Creating constant for each intern.
const intern = new Intern();

// Console out the intern's parameters.
intern.printInfo();

module.exports = Intern;