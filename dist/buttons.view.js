export class View {
    constructor() {
        this.confirmButton = document.querySelector(".confirm-button");
        this.cancelButton = document.querySelector(".cancel-button");
        this.recipientName = document.querySelector(".person-name");
        this.location = document.querySelector(".location");
        this.time = document.querySelector(".time");
    }
    bindConfirmButton(callback) {
        this.confirmButton.addEventListener("click", (e) => {
            e.preventDefault();
            callback();
        });
    }
    bindCancelButton(callback) {
        this.cancelButton.addEventListener("click", (e) => {
            e.preventDefault();
            callback();
        });
    }
    getRecipientName() {
        return this.recipientName.value;
    }
    getLocation() {
        return this.location.value;
    }
    getTime() {
        return this.time.value;
    }
    resetForm() {
        this.recipientName.value = "";
        this.location.value = "london";
        this.time.value = "morning";
    }
}
