import { View } from "./buttons.view.ts"
import { DeliveryData, deliveryDatabase } from "./db.ts"

class Controller {
  private view: View

  constructor(view: View) {
    this.view = view
    this.bindEvents()
  }

  private bindEvents(): void {
    this.view.bindConfirmButton(() => this.handleConfirmButtonClick())
    this.view.bindCancelButton(() => this.handleCancelButtonClick())
  }

  private handleConfirmButtonClick(): void {
    const formData: DeliveryData = {
      recipientName: this.view.getRecipientName(),
      place: this.view.getLocation(),
      time: this.view.getTime(),
    }

    deliveryDatabase.push(formData)

    console.log("Delivery Database:", deliveryDatabase)
  }

  private handleCancelButtonClick(): void {
    this.view.resetForm()
  }
}

export default Controller
