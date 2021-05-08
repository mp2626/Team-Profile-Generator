const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNum = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNum;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;