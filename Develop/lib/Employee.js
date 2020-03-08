class Employee {
    // Setting class parameters.
    constructor(name,id,email,role) {
        this.name = name;
        this.id = id;
        this. email = email;
        this.role = role;
    };
    // Console out the class parameters.
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
        console.log(`role: ${this.role}`);      
    };
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return this.role;
    };
};

// Creating constant for each employee.
const employee = new Employee();

// Console out the employee's parameters.
employee.printInfo();

module.exports = Employee;