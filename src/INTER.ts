interface employeeConfig{
    firstname?:string;
    lastname?: string;
    codeEmp?:number;
    age?:number;
    selary?:any;
    bonus?:boolean;
}

function createEmployee(config: employeeConfig): { firstname: string; lastname: string; codeEmp: number; age: number; salary: any; bonus:boolean} {
    let newEmployee = { firstname: "นาย A", lastname: "สมเจียม", codeEmp: 46509, age: 25, salary: 15000.0, bonus: true }
    if(config.firstname){
        newEmployee.firstname = config.firstname
    }
    if(config.lastname){
        newEmployee.lastname = config.lastname
    }
    if(config.codeEmp){
        newEmployee.codeEmp = config.codeEmp
    }
    if (config.age) {
        newEmployee.age = config.age
    }
    if (config.selary) {
        newEmployee.salary = config.selary
    }
    if (config.bonus === true) {
        newEmployee.salary = newEmployee.salary * 2.5
    }
    return newEmployee
}

let myEmp = createEmployee({ firstname: "ปกรณ์", lastname: "ศิลปประ", codeEmp: 78546, age: 70, selary:2000,bonus:true})

console.log('Employee',myEmp)