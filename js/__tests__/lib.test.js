import {getCashBack} from "../lib.js";

test("calculated cashback should be correct for usual category", () => {
    const purchase = 1000;
    const expected = 10;

    const result = getCashBack(purchase, null, null);

    expect(result).toBe(expected);

});

test("calculated cashback should be correct for increased category", () => {
    const purchase = 1000;
    const expected = 50;

    const result = getCashBack(null, purchase, null);

    expect(result).toBe(expected);
});

test("calculated cashback should be correct for special category", () => {
    const purchase = 1000;
    const expected = 300;

    const result = getCashBack(null, null, purchase);

    expect(result).toBe(expected);
});

test("calculated cashback should be correct for three category", () => {
    const purchase = 1000;
    const expected = 360;

    const result = getCashBack(purchase, purchase, purchase);

    expect(result).toBe(expected);
});