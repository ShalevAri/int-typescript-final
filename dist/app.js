const confirmButton = document.querySelector(".confirm-button");
const totalDeliveryAmount = document.querySelector(".total-delivery-amount");
const state = document.querySelector(".state");
let submitCount = 0;
function incrementCount() {
    submitCount += 1;
}
confirmButton.addEventListener("click", (e) => {
    e.preventDefault();
    incrementCount();
    let submitCountToDisplay = submitCount.toString();
    totalDeliveryAmount.innerHTML = submitCountToDisplay;
    if (submitCount === 1) {
        state.innerHTML = ":)";
    }
});
