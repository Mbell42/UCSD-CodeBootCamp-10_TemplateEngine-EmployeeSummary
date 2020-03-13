// Grabbing 'Employee' class dependency.
const Employee = require("./Employee");

// Create sub-class of 'Manager' by extending class 'Employee'.
class Manager extends Employee {
    // Defining subclass parameters
    constructor(name,id,email,officeNumber) {
        // Grabbing superclass parameters as dependencies
        super(name,id,email);
        this.officeNumber = officeNumber;
    };
    // Console out the subclass parameters.
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);   
        console.log(`officeNumber: ${this.officeNumber}`);      
    };
    getRole() {
        return "Manager";
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
};

// Creating constant for each manager.
const manager = new Manager();

// Console out the manager's parameters.
manager.printInfo();

module.exports = Manager;