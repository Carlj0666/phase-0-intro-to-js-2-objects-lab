// Write your solution in this file!//


const employee = {
  name: "Carl",
  streetAddress: "123 Home Street, Sweet Home, Homington 12345"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
  return Object.assign({}, employee, { [key]: value });
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee;
};

function deleteFromEmployeeByKey(employee, key){
  const newEmployee = Object.assign({}, employee);
  delete newEmployee[key];
  return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
}