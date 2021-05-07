class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    print() {
        console.log(this.name)
    };

}


module.exports = Employee;