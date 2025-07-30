let employees=[];

function addEmp(id,name,salary){
    employees.push({id,name,salary});
    console.log("Employee added",employees);
}
addEmp(1,"Aswini",20000)
addEmp(2,"Aravindh",30000)
addEmp(3,"Rishiga",10000)
//add emp 
function updateEmp(id,newDetail){
    const emp=employees.find(e=>e.id === id)
    if(emp){
        Object.assign(emp,newDetail);
        console.log("updated",employees)
    }else{
        console.lof("Employees not found")
    }
}
updateEmp(3,{name:"prithika"});
//delete emp
function removeEmp(id){
    const index=employees.findIndex(e=>e.id === id)
    if(index !==-1){
        employees.splice(index,id)
        console.log("employees removed",employees)
    }else{
        console.log("employees not found");
    }
}
removeEmp(3)
// calculate total salary
function totalSalary(){
    const total=employees.reduce((sum,emp) =>sum+emp.salary ,0);
    console.log("total salary is",total);
}
totalSalary()