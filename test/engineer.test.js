
const Engineer = require("../lib/engineer");

describe('Engineer', () => {
    it('can create a new Engineer class', () => {
        const newEngineer = new Engineer();
        expect(newEngineer instanceof Engineer).toBe(true);
    })

    it('returns Engineer name', () => {
        const name = 'mike';
        const newEngineer = new Engineer(name);
        expect(newEngineer.name).toBe('mike');
    })

    it('returns Engineer get ID', () => {
        const id = 123;
        const newEngineer = new Engineer('mike', id);
        expect(newEngineer.id).toBe(id);
    })

    it('returns Engineer email', () => {
        const email = 'mike@mp.com';
        const newEngineer = new Engineer('mike', 1, email);
        expect(newEngineer.email).toBe('mike@mp.com');
    })

    it('returns Engineer office number', () => {
        const email = 'mike@mp.com';
        const newEngineer = new Engineer('mike', 1, email);
        expect(newEngineer.email).toBe('mike@mp.com');
    })

    it('getName() returns a name', () => {
        const name = 'mike';
        const newEngineer = new Engineer(name,);
        expect(newEngineer.getName()).toBe("mike");
    })

    it('getId() returns an id', () => {
        const id = 42;
        const newEngineer = new Engineer('test', id,);
        expect(newEngineer.getId()).toBe(42);
    })

    it('getEmail() returns an email', () => {
        const email = 'mike@mp.com';
        const newEngineer = new Engineer('test', 1, email);
        expect(newEngineer.getEmail()).toBe('mike@mp.com');
    })

    it('getRole() returns a role', () => {
        const newEngineer = new Engineer();
        expect(newEngineer.getRole()).toBe('Engineer');
    })
})