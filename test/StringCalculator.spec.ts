import { add } from '../src/StringCalculator'

describe('Add should', () => {
    test('return 0 when the string is empty', () => {
        expect(add('')).toBe(0);
    })
    
    test('returns 1 when the string is "1"', () => {
        expect(add('1')).toBe(1);
    })

    test('return 2 when the string is "2"', () => {
        expect(add('2')).toBe(2);
    })

    test('returns 3 when then string is "3"', () => {
        expect(add('3')).toBe(3);
    })
    test('returns 3 when the string is "1,2"', () => {
        expect(add('1,2')).toBe(3);
    })
    test('returns 5 when the string is "2,3"', () => {
        expect(add('2,3')).toBe(5);
    });
})