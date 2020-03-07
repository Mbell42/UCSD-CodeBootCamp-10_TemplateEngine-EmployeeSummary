// Grabbing 'Employee' class dependency.
const Employee = require("./Employee");

// Create sub-class of 'Manager' by extending class 'Employee'.
class Manager extends Employee {
    // Defining subclass parameters
    constructor(name,id,email,role,officeNumber) {
        // Grabbing superclass parameters as dependencies
        super(name,id,email,role);
        this.officeNumber = officeNumber;
    };
    // Console out the subclass parameters.
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`name: ${this.id}`);
        console.log(`name: ${this.email}`);
        console.log(`name: ${this.role}`);      
        console.log(`name: ${this.officeNumber}`);      
    };
};

// Creating constant for each manager.
const manager = new Manager();

// Console out the manager's parameters.
manager.printInfo();

module.exports = manager;