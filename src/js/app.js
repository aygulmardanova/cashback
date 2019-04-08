import {getCashBack} from "./lib.js";

document.querySelector('#cb-btn').addEventListener('click', setCB);

export function setCB() {

    const purchaseUsual = document.getElementById("purchaseUsual").value;
    const purchaseIncreased = document.getElementById("purchaseIncreased").value;
    const purchaseSpecial = document.getElementById("purchaseSpecial").value;

    document.getElementById("cb").innerHTML =
        getCashBack(purchaseUsual, purchaseIncreased, purchaseSpecial);
}