"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.employees[2] = 'Anna';
accounting.printEmployeeInformation();
// const accountingCopy = { name: 'd', describe: accounting.describe }
// accountingCopy.describe()
//# sourceMappingURL=app.js.map