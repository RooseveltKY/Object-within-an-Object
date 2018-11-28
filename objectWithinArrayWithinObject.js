//An object within an array within an object
var employees= {};

employees["people"]= [
  {"name": "Landon"},
  {"name": "Charley"},
  {"name": "Philip"}
  ];
  
window.alert(employees.people[2].name);