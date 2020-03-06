// TODO: Write code to define and export the Employee class
class Employee {
    // Setting class parameters.
    constructor(name,id,email,jobTitle) {
        this.name = name;
        this.id = id;
        this. email = email;
        this.jobTitle = jobTitle;
    };
    // Console out the class parameters.
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`name: ${this.id}`);
        console.log(`name: ${this.email}`);
        console.log(`name: ${this.jobTitle}`);      
    };
};

// Creating constant for each employee.
const employee = new Employee();

// Console out the employee's parameters.
employee.printInfo();