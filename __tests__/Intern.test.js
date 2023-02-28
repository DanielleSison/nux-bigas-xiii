const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Miles');
});

test('set school with constructor', () => {
    const testValue = 'Dartmouth';
    const e = new Intern('Miles', 1, 'intern@email.com', testValue);
    expect(e.school).toBe(testValue);
});

test('get school with getSchool() method', () => {
    const testValue = 'Dartmouth';
    const e = new Intern('Miles', 1, 'intern@email.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

// Test if the getRole() value is Intern
test('getRole() return Intern', () => {
    const testValue = 'Intern';
    const e = new Intern('Miles', 1, 'intern@email.com', 'Dartmouth');
    expect(e.getRole()).toBe(testValue);
});