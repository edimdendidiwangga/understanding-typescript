class Department {
    private employees: String[] = [];

    constructor(private readonly id: string, public name: string) {

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

class ITDepartment extends Department {
    constructor(id: string,  public admins: string[]) {
        super(id, 'IT');
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'IT');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment('d1', ['Max']);

it.describe();
it.addEmployee('Max');
it.addEmployee('Manu');

it.printEmployeeInformation();
console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Something went wrong..')
accounting.printReports()

