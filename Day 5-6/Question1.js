let employees = [
    {
        name : "Vivek",
        age : 26,
        city : "Pune",
        salary : "30000"
    },
    {
        name : "Atul",
        age : 26,
        city : "Daund",
        salary : "30000"
    },
    {
        name : "Akshay",
        age : 26,
        city : "Pune",
        salary : "30000"
    },

];

function displayEmpDetails(d){

    let tabledata = {};

    d.forEach(function(addEmp,index){
        let currentdata = `<tr>
        <td>${index + 1}</td>
        <td>${addEmp.name}</td>
        <td>${addEmp.age}</td>
        <td>${addEmp.city}</td>
        <td>${addEmp.salary}</td>
        <td>
        <button onclick='deleteEmpDetails(${index})'>delete</button>
        </td>
        </tr>`;
        
        tabledata += currentdata;
    });

    document.getElementById("tdata").innerHTML = tabledata;
}

displayEmpDetails(employees);

function addEmpDetails(e){
    e.preventDefault();
    let addEmp = {};

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;

    addEmp.name = name;
    addEmp.age = Number(age);
    addEmp.city = city;
    addEmp.salary = Number(salary);

    employees.push(addEmp);

    displayEmpDetails(employees);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
}

function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = employees.filter(function (addEmp) {
      return (
        addEmp.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    displayEmpDetails(newdata);
  }

function searchByCity() {
    let searchValue = document.getElementById("searchCity").value;
  
    let newdata = employees.filter(function (addEmp) {
      return (
        addEmp.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    displayEmpDetails(newdata);
}

function deleteEmpDetails(index) {
  employees.splice(index, 1);
  displayEmpDetails(employees);
}