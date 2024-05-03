// unit.test.js

import {
    isPhoneNumber,
    isEmail,
    isStrongPassword,
    isDate,
    isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Tests for isPhoneNumber
test('valid phone number with area code', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('valid phone number without area code', () => {
    expect(isPhoneNumber('456-7890')).toBe(true);
});

test('invalid phone number with letters', () => {
    expect(isPhoneNumber('123-ABCD')).toBe(false);
});

test('invalid phone number with too few digits', () => {
    expect(isPhoneNumber('123-4')).toBe(false);
});

// Tests for isEmail
test('valid email', () => {
    expect(isEmail('example@test.com')).toBe(true);
});

test('valid email with underscore', () => {
    expect(isEmail('example_name@abc.co')).toBe(true);
});

test('invalid email with no domain', () => {
    expect(isEmail('example@.com')).toBe(false);
});

test('invalid email with multiple @ symbols', () => {
    expect(isEmail('exa@mple@test.com')).toBe(false);
});

// Tests for isStrongPassword
test('valid strong password', () => {
    expect(isStrongPassword('a1_b2c3')).toBe(true);
});

test('valid strong password with 15 characters', () => {
    expect(isStrongPassword('Abc123_456789XY')).toBe(true);
});

test('invalid strong password starting with number', () => {
    expect(isStrongPassword('1abcd_efghi')).toBe(false);
});

test('invalid strong password with special character', () => {
    expect(isStrongPassword('abc#123')).toBe(false);
});

// Tests for isDate
test('valid date with single digit month and day', () => {
    expect(isDate('1/1/2020')).toBe(true);
});

test('valid date with double digit month and day', () => {
    expect(isDate('12/31/2020')).toBe(true);
});

test('invalid date with invalid month', () => {
    expect(isDate('130/15/2020')).toBe(false);
});

test('invalid date format with dashes', () => {
    expect(isDate('12-31-2020')).toBe(false);
});

// Tests for isHexColor
test('valid 3 character hex color', () => {
    expect(isHexColor('#abc')).toBe(true);
});

test('valid 6 character hex color', () => {
    expect(isHexColor('#A1B2C3')).toBe(true);
});

test('invalid hex color with 7 characters', () => {
    expect(isHexColor('#1234567')).toBe(false);
});

test('invalid hex color without hash', () => {
    expect(isHexColor('12345G')).toBe(false);
});
