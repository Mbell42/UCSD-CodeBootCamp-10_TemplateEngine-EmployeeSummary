class Employee {
    // Setting class parameters.
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this. email = email;
    };
    // Console out the class parameters.
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);    
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
        return "Employee";
    };
}
// Creating constant for each employee.
const employee = new Employee();

// Console out the employee's parameters.
employee.printInfo();

module.exports = Employee;