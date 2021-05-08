
const Engineer = require("../lib/engineer");

describe('Engineer', () => {

    it('can create a new Engineer class', () => {
        const newEngineer = new Engineer();
        expect(newEngineer instanceof Engineer).toBe(true);
    })

    it("check Engineer constructor", () => {
        const name = 'mike';
        const id = 123;
        const email = 'mike@mp.com';
        const gitHub = 'mp2626'

        const newEngineer = new Engineer(name, id, email, gitHub)

        expect(newEngineer).toEqual({ name: 'mike', id: 123, email: 'mike@mp.com', gitHub: 'mp2626' });
    })

    it('check Engineer methods', () => {
        const name = 'mike';
        const id = 123;
        const email = 'mike@mp.com';
        const gitHub = 'mp2626';

        const newEngineer = new Engineer(name, id, email, gitHub);

        expect(newEngineer.getName()).toBe("mike");
        expect(newEngineer.getId()).toBe(123);
        expect(newEngineer.getEmail()).toBe('mike@mp.com');
        expect(newEngineer.getGitHub()).toBe('mp2626');
        expect(newEngineer.getRole()).toBe('Engineer');
    })
})
