let employees = [];

function Employee(name, title, salary){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full Time";

    this.printEmployeeForm = function(){
        console.log(`Name: ${this.name}, Job Title: ${this.title}, Salary: ${this.salary}, Status: ${this.status}`);
    }
}

let emp1 = new Employee("John Hammond Jr", "Sr. Devloper", 130000, "Part Time");
let emp2 = new Employee("Babe Ruth", "Most likely to play sports", 100000, "Full time badass");
let emp3 = new Employee("Simba", "A lion", 0, "-he's a lion");

emp2.status = "Part time at Wendy's";

emp1.printEmployeeForm();
emp2.printEmployeeForm();
emp3.printEmployeeForm();

employees.push(emp1, emp2, emp3);

console.log(employees[1].salary)