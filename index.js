const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee")
const test = new Employee("mike")

test.print()