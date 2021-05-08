const { expect, it } = require("@jest/globals");
const Employee = require("../lib/employee");

describe('Employee', () => {

    it('can create a new employee class', () => {
        const newEmployee = new Employee();
        expect(newEmployee instanceof Employee).toBe(true);
    })

    it('returns employee name', () => {
        const name = 'mike';
        const newEmployee = new Employee(name);
        expect(newEmployee.name).toBe('mike');
    })

    it('returns employee get ID', () => {
        const id = 123;
        const newEmployee = new Employee('mike', id);
        expect(newEmployee.id).toBe(id);
    })

    it('returns employee email', () => {
        const email = 'mike@mp.com';
        const newEmployee = new Employee('mike', 1, email);
        expect(newEmployee.email).toBe('mike@mp.com');
    })

    it('getName() returns a name', () => {
        const name = 'mike';
        const newEmployee = new Employee(name,);
        expect(newEmployee.getName()).toBe("mike");
    })

    it('getId() returns an id', () => {
        const id = 42;
        const newEmployee = new Employee('test', id,);
        expect(newEmployee.getId()).toBe(42);
    })

    it('getEmail() returns an email', () => {
        const email = 'mike@mp.com';
        const newEmployee = new Employee('test', 1, email);
        expect(newEmployee.getEmail()).toBe('mike@mp.com');
    })

    it('getRole() returns a role', () => {
        const newEmployee = new Employee();
        expect(newEmployee.getRole()).toBe('Employee');
    })
})