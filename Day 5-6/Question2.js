window.onload = function(){
let Buses = [
    {
        name : "vivek", 
        source : "pune",
        destination : "goa",
        number : "mh12ab1234",
        passenger_capacity : "4",
    },
    
 ];
    if (localStorage.getItem("localBus") == null) {
    localStorage.setItem("localBus", JSON.stringify(Buses));
  }
};

function displayBusDetails(d = undefined){

    let tabledata = "";
    let localBus;
    if(d == undefined){
        localBus = JSON.parse(localStorage.getItem("localBus"));
    } 
    else{
        localBus = d;
    }

    localBus.forEach(function(addNewBus,index){
        let currentdata = `<tr>
        <td>${index + 1}</td>
        <td>${addNewBus.name}</td>
        <td>${addNewBus.source}</td>
        <td>${addNewBus.destination}</td>
        <td>${addNewBus.number}</td>
        <td>${addNewBus.passenger_capacity}</td>
        </tr>`;
        
        tabledata += currentdata;
    });

    document.getElementById("tdata").innerHTML = tabledata;
}

displayBusDetails();

function addBusDetails(e){
    e.preventDefault();
    let addNewBus = {};

    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let passenger_capacity = document.getElementById("passenger_capacity").value;

    addNewBus.name = name;
    addNewBus.source = source;
    addNewBus.destination = destination;
    addNewBus.number = number;
    addNewBus.passenger_capacity = passenger_capacity;

    let localBus = JSON.parse(localStorage.getItem("localBus"));
    localBus.push(addNewBus);
    localStorage.setItem("localBus", JSON.stringify(localBus));

    displayBusDetails();

    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("number").value = "";
    document.getElementById("passenger_capacity").value = "";
}

function searchBySource() {
    let searchValue = document.getElementById("searchSource").value;
    let localBus = JSON.parse(localStorage.getItem("localBus"));
    let newdata = localBus.filter(function (addNewBus) {
      return (
        addNewBus.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    displayBusDetails(newdata);
  }

function searchByDestination() {
    let searchValue = document.getElementById("searchDestination").value;
    let localBus = JSON.parse(localStorage.getItem("localBus"));
    let newdata = localBus.filter(function (addNewBus) {
      return (
        addNewBus.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    displayBusDetails(newdata);
}