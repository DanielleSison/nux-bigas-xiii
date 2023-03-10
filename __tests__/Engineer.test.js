const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Dominique');
});

test('set github account with constructor', () => {
    const testValue = 'GitHubAccount';
    const e = new Engineer('Dominique', 1, 'email@provider.com', testValue);
    expect(e.github).toBe(testValue);
})

test('get github account with getGithub() method', () => {
    const testValue = 'GitHubAccount';
    const e = new Engineer('Dominique', 1, 'engineer@email.com', testValue);
    expect(e.getGitHub()).toBe(testValue);
});

// Test if the getRole() value is Engineer
test('getRole() return Engineer', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Dominique', 1, 'engineer@email.com', 'GitHubAccount');
    expect(e.getRole()).toBe(testValue);
});