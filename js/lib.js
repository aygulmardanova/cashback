export function getCashBack(purchaseUsual, purchaseIncreased, purchaseSpecial) {

    const usualCashBack = 0.01;
    const increasedCashBack = 0.05;
    const specialCashBack = 0.3;

    return purchaseUsual * usualCashBack +
        purchaseIncreased * increasedCashBack +
        purchaseSpecial * specialCashBack;
}