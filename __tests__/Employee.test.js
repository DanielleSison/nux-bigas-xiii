const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Sarah');
});

test('set id with constructor', () => {
    const testValue = 100;
    const e = new Employee('Sarah', testValue);
    expect(e.id).toBe(testValue);
});

test('set email with constructor', () => {
    const testValue = 'employee@email.com';
    const e = new Employee('Sarah', 1, testValue);
    expect(e.email).toBe(testValue);
});

// Test if the getRole() value is Employee
test('getRole() return Employee', () => {
    const testValue = 'Employee';
    const e = new Employee('Sarah', 1, 'employee@email.com');
    expect(e.getRole()).toBe(testValue);
});