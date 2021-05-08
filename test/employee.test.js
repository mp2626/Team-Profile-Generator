const { expect, it } = require("@jest/globals");
const Employee = require("../lib/employee");

describe('Employee', () => {

    it('can create a new employee class', () => {
        const newEmployee = new Employee();
        expect(newEmployee instanceof Employee).toBe(true);
    })

    it("check employee constructor", () => {
        const name = 'mike';
        const id = 123;
        const email = 'mike@mp.com';

        const newEmployee = new Employee(name, id, email)

        expect(newEmployee).toEqual({ name: 'mike', id: 123, email: 'mike@mp.com' });
    })

    it('check employee methods', () => {
        const name = 'mike';
        const id = 123;
        const email = 'mike@mp.com';

        const newEmployee = new Employee(name, id, email);

        expect(newEmployee.getName()).toBe("mike");
        expect(newEmployee.getId()).toBe(123);
        expect(newEmployee.getEmail()).toBe('mike@mp.com');
        expect(newEmployee.getRole()).toBe('Employee')
    })
})