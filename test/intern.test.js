
const Intern = require("../lib/intern");

describe('Intern', () => {
    it('can create a new Intern class', () => {
        const newIntern = new Intern();
        expect(newIntern instanceof Intern).toBe(true);
    })

    it("check Intern constructor", () => {
        const name = 'mike';
        const id = 123;
        const email = 'mike@mp.com';
        const school = 'school high'

        const newIntern = new Intern(name, id, email, school)

        expect(newIntern).toEqual({ name: 'mike', id: 123, email: 'mike@mp.com', schoolName: 'school high' });
    })

    it('check Intern methods', () => {
        const name = 'mike';
        const id = 123;
        const email = 'mike@mp.com';
        const school = 'school high';

        const newIntern = new Intern(name, id, email, school);

        expect(newIntern.getName()).toBe("mike");
        expect(newIntern.getId()).toBe(123);
        expect(newIntern.getEmail()).toBe('mike@mp.com');
        expect(newIntern.getSchool()).toBe('school high');
        expect(newIntern.getRole()).toBe('Intern');
    })
})