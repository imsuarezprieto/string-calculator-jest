import { add } from '../src/StringCalculator'

describe('Add should', () => {
    test('do nothing', () => {
        expect(add()).toBe(0);
    })
})