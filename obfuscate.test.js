const { test, expect } = require("@jest/globals");
const obfuscate = require('./obfuscate')

test('16 digit credit card', () => {
    expect(obfuscate('1234567812345678')).toBe('************5678');
})

test('16 digit credit card with spaces', () => {
    expect(obfuscate('1234 5678 1234 5678')).toBe('**** **** **** 5678');
})

test('4 digit credit card', () => {
    expect(obfuscate('1234')).toBe('1234');
})

test('4 digit credit card with spaces', () => {
    expect(obfuscate('12  34')).toBe('12  34');
})

test('3 digit credit card', () => {
    expect(obfuscate('123')).toBe('123');
})

test('card card with spaces in last 4 digits', () => {
    expect(obfuscate('12341234  123')).toBe('*******4  123');
})

test('long card card with many spaces', () => {
    expect(obfuscate('1234  45  87 4 11236    8 ')).toBe('****  **  ** * **236    8 ');
})