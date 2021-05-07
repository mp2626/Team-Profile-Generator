const { expect } = require("@jest/globals");
const Employee = require("../lib/employee");

describe('Employee', () => {
    it('can create a new employee class', () => {
        const newEmployee = new Employee();
        expect(newEmployee instanceof Employee).toBe(true);
    })
    it('returns employee name', () => {
        const name = 'mike';
        const newEmployee = new Employee(name);
        expect(newEmployee.name).toEqual('mike');
    })

})