const { expect, it } = require("@jest/globals");
const Manager = require("../lib/manager");

describe('Manager', () => {
    it('can create a new Manager class', () => {
        const newManager = new Manager();
        expect(newManager instanceof Manager).toBe(true);
    })

    it('returns Manager name', () => {
        const name = 'mike';
        const newManager = new Manager(name);
        expect(newManager.name).toBe('mike');
    })

    it('returns Manager get ID', () => {
        const id = 123;
        const newManager = new Manager('mike', id);
        expect(newManager.id).toBe(id);
    })

    it('returns Manager email', () => {
        const email = 'mike@mp.com';
        const newManager = new Manager('mike', 1, email);
        expect(newManager.email).toBe('mike@mp.com');
    })

    it('returns Manager office number', () => {
        const officeNum = '12345';
        const newManager = new Manager('mike', 1, 'mike@mp.com', officeNum);
        expect(newManager.officeNum).toBe('12345');
    })

    it('getName() returns a name', () => {
        const name = 'mike';
        const newManager = new Manager(name,);
        expect(newManager.getName()).toBe("mike");
    })

    it('getId() returns an id', () => {
        const id = 42;
        const newManager = new Manager('test', id,);
        expect(newManager.getId()).toBe(42);
    })

    it('getEmail() returns an email', () => {
        const email = 'mike@mp.com';
        const newManager = new Manager('test', 1, email);
        expect(newManager.getEmail()).toBe('mike@mp.com');
    })

    it('getOfficeNumber() returns a office number', () => {
        const officeNum = '12345';
        const newManager = new Manager('test', 1, 'mike@mp.com', officeNum);
        expect(newManager.getOfficeNumber()).toBe('12345');
    })

    it('getRole() returns a role', () => {
        const newManager = new Manager();
        expect(newManager.getRole()).toBe('Manager');
    })
})