const Employee = require("../lib/employee");

describe('Employee', () => {
    it('can create a new employee class', () => {
        const newEmployee = new Employee();
        expect(newEmployee instanceof Employee).toBe(true);
    })
})