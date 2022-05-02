// UC11- Ability to create Employee Payroll Data with id, name and salary

let totalWage = 0;
let totalHour = 0;

let totalWagess = empDailyHrsAndWageArr.filter(DailyHrsAndWage =>DailyHrsAndWage.dailyHours>0)
                                      .reduce((totalWages,DailyHrsAndWage) => totalWage += DailyHrsAndWage.dailyWage,0);

let totalHourss = empDailyHrsAndWageArr.filter(DailyHrsAndWage =>DailyHrsAndWage.dailyHours>0)
                                      .reduce((totalWages,DailyHrsAndWage) => totalHour += DailyHrsAndWage.dailyHours,0);
 
 console.log("Uc -11 tota Hours : "+totalHourss+" , and total wahe = "+ totalWagess);

 class EmployeePayrollData{
    // property
    id;
    salary;                   
    // constructor
    constructor(id, name, salary) { 
     this.id = id;
     this.name = name;
     this.salary = salary;
    }
    
    // getter and setter method
    get name() 
    { 
        return this._name; 
    }
    
    set name(name) 
    { 
        this._name = name; 
    }
    
    // method
    toString() {
         return "id=" + this.id + ", name='" + this.name + "', salary=" + this.salary;
     }
    }
    
    //create object
    let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000); 
    console.log(employeePayrollData.toString());
    //log name
    employeePayrollData.name = "john";
    console.log(employeePayrollData.toString());