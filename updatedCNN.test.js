const { test, expect } = require("@jest/globals");
const updatedCCN = require('./updatedCCN');


test('same string', () => {
    expect(updatedCCN('123456', '123456')).toBe(false);
})

test('different strings', () => {
    expect(updatedCCN('123456', '1234 6')).toBe(true);
})

