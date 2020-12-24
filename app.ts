class Department {
    private employees: String[] = [];

    constructor(private id: string, public name: string) {

    }

    describe(this: Department) {
        console.log(`Department: (${this.id}) ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees);
        
    }
}

const accounting = new Department('d1', 'Accounting');

accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printEmployeeInformation();

// const accountingCopy = { name: 'd', describe: accounting.describe }
// accountingCopy.describe()
