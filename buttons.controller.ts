import {View} from "./buttons.view"

class Controller {
	private view: View

	constructor(view: View) {
		this.view = view
		this.bindEvents()
	}

	private bindEvents(): void {
		this.view.bindConfirmButton(() => {
			alert("Your data has been submitted")
		})

		this.view.bindCancelButton(() => {
			alert("Your data has been cancelled")
		})
	}
}

const view = new View()
const controller = new Controller(view)
