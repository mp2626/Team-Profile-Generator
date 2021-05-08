const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitName = gitHub;
    }
    getGitHub() {
        return this.gitName;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;