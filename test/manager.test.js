const { expect, it } = require("@jest/globals");
const Manager = require("../lib/manager");

describe('Manager', () => {

    it('can create a new Manager class', () => {
        const newManager = new Manager();
        expect(newManager instanceof Manager).toBe(true);
    })

    it("check Manager constructor", () => {
        const name = 'mike';
        const id = 123;
        const email = 'mike@mp.com';
        const officeNum = '12345'

        const newManager = new Manager(name, id, email, officeNum)

        expect(newManager).toEqual({ name: 'mike', id: 123, email: 'mike@mp.com', officeNum: '12345' });
    })

    it('check Manager methods', () => {
        const name = 'mike';
        const id = 123;
        const email = 'mike@mp.com';
        const officeNum = '12345'

        const newManager = new Manager(name, id, email, officeNum);

        expect(newManager.getName()).toBe("mike");
        expect(newManager.getId()).toBe(123);
        expect(newManager.getEmail()).toBe('mike@mp.com');
        expect(newManager.getOfficeNumber()).toBe('12345');
        expect(newManager.getRole()).toBe('Manager');
    })
})