import { deliveryDatabase } from "./db.ts";
class Controller {
    constructor(view) {
        this.view = view;
        this.bindEvents();
    }
    bindEvents() {
        this.view.bindConfirmButton(() => this.handleConfirmButtonClick());
        this.view.bindCancelButton(() => this.handleCancelButtonClick());
    }
    handleConfirmButtonClick() {
        const formData = {
            recipientName: this.view.getRecipientName(),
            place: this.view.getLocation(),
            time: this.view.getTime(),
        };
        deliveryDatabase.push(formData);
        console.log("Delivery Database:", deliveryDatabase);
    }
    handleCancelButtonClick() {
        this.view.resetForm();
    }
}
export default Controller;
