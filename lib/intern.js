const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.schoolName = school;
    }
    getSchool() {
        return this.schoolName;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;