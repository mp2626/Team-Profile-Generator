
const Intern = require("../lib/intern");

describe('Intern', () => {
    it('can create a new Intern class', () => {
        const newIntern = new Intern();
        expect(newIntern instanceof Intern).toBe(true);
    })

    it('returns Intern name', () => {
        const name = 'mike';
        const newIntern = new Intern(name);
        expect(newIntern.name).toBe('mike');
    })

    it('returns Intern get ID', () => {
        const id = 123;
        const newIntern = new Intern('mike', id);
        expect(newIntern.id).toBe(id);
    })

    it('returns Intern email', () => {
        const email = 'mike@mp.com';
        const newIntern = new Intern('mike', 1, email);
        expect(newIntern.email).toBe('mike@mp.com');
    })

    it('returns Intern school', () => {
        const school = 'school high';
        const newIntern = new Intern('mike', 1, 'mike@mp.com', school);
        expect(newIntern.schoolName).toBe('school high');
    })

    it('getName() returns a name', () => {
        const name = 'mike';
        const newIntern = new Intern(name,);
        expect(newIntern.getName()).toBe("mike");
    })

    it('getId() returns an id', () => {
        const id = 42;
        const newIntern = new Intern('test', id,);
        expect(newIntern.getId()).toBe(42);
    })

    it('getEmail() returns an email', () => {
        const email = 'mike@mp.com';
        const newIntern = new Intern('test', 1, email);
        expect(newIntern.getEmail()).toBe('mike@mp.com');
    })

    it('getSchool() returns a school name', () => {
        const school = 'school high';
        const newIntern = new Intern('test', 1, 'mike@mp.com', school);
        expect(newIntern.getSchool()).toBe('school high');
    })

    it('getRole() returns a role', () => {
        const newIntern = new Intern();
        expect(newIntern.getRole()).toBe('Intern');
    })
})