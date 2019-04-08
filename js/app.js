import {getCashBack} from "./lib.js";

document.querySelector('#cb-btn').addEventListener('click', getCB);

export function getCB() {

    const purchase = document.getElementById("purchase").value;
    const category = document.getElementById("category").value;

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