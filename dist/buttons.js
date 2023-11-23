var confirmButton = document.querySelector(".confirm-button");
var cancelButton = document.querySelector(".cancel-button");
confirmButton.addEventListener("click", function (e) {
    e.preventDefault;
    alert("Your data has been submitted");
});
cancelButton.addEventListener("click", function (e) {
    e.preventDefault;
    alert("Your data has been cancelled");
});
