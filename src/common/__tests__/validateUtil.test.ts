import { validateRequest } from '../validateUtil';

describe('validateUtil', () => {
    it('should provide false when data is empty', () => {
        expect(validateRequest([])).toBe(false);
    });

    it('should provide false when data is not match', () => {
        expect(validateRequest([1], 2)).toBe(false);
    });

    it('should provide false for invalid data', () => {
        expect(validateRequest(['1'] as any, 1)).toBe(false);
    });

    it('should provide true for valid data', () => {
        expect(validateRequest([1, 2], 2)).toBe(true);
    });
})