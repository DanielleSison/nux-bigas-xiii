const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Karen');
});

test('set office number with constructor', () => {
    const testValue = 100;
    const e = new Manager('Karen', 1, 'manager@email.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('get office number with getOfficeNumber() method', () => {
    const testValue = 100;
    const e = new Manager('Karen', 1, 'manager@email.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

// Test if the getRole() value is Manager
test('getRole() return Manager', () => {
    const testValue = 'Manager';
    const e = new Manager('Karen', 1, 'manager@email.com', 100);
    expect(e.getRole()).toBe(testValue);
});