// Grabbing 'Employee' class dependency.
const Employee = require("./Employee");

// Create sub-class of 'Manager' by extending class 'Employee'.
class Manager extends Employee {
    // Defining subclass parameters
    constructor(name,id,email,jobTitle,office) {
        // Grabbing superclass parameters as dependencies
        super(name,id,email,jobTitle);
        this.office = office;
    };
    // Console out the subclass parameters.
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`name: ${this.id}`);
        console.log(`name: ${this.email}`);
        console.log(`name: ${this.jobTitle}`);      
        console.log(`name: ${this.office}`);      
    };
};

// Creating constant for each manager.
const manager = new Manager();

// Console out the manager's parameters.
manager.printInfo();

module.exports = manager;