import { add } from '../src/StringCalculator'

describe('Add should', () => {
    test('return 0 when the string is empty', () => {
        expect(add('')).toBe(0);
    })
    
    test('returns 1 when the string is "1"', () => {
        expect(add('1')).toBe(1);
    })
})