import {getCashBack} from "./lib.js";

document.querySelector('#cbBtn').addEventListener('click', getCB);

export function getCB() {

    let purchase = document.getElementById("purchase").value;
    let category = document.getElementById("category").value;

    let cashBack;
    switch (category) {
        case 'usual':
            cashBack = getCashBack(purchase, null, null);
            break;
        case 'increased':
            cashBack = getCashBack(null, purchase, null);
            break;
        case 'special':
            cashBack = getCashBack(null, null, purchase);
            break;
    }

    console.log(cashBack);
    document.getElementById("cb").innerHTML = cashBack;
    return cashBack;
}

{
    let purchase = 100;

    console.log('usual cashback for purchase 100: ' + getCashBack(purchase, null, null));
    console.log('increased cashback for purchase 100: ' + getCashBack(null, purchase, null));
    console.log('special cashback for purchase 100: ' + getCashBack(null, null, purchase));
    console.log('purchases in three categories: ' + getCashBack(purchase, purchase, purchase));
}
