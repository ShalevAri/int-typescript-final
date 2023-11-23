export class View {
	private confirmButton: HTMLButtonElement
	private cancelButton: HTMLButtonElement

	constructor() {
		this.confirmButton = document.querySelector(
			".confirm-button"
		) as HTMLButtonElement
		this.cancelButton = document.querySelector(
			".cancel-button"
		) as HTMLButtonElement
	}

	bindConfirmButton(callback: () => void): void {
		this.confirmButton.addEventListener("click", (e) => {
			e.preventDefault()
			callback()
		})
	}

	bindCancelButton(callback: () => void): void {
		this.cancelButton.addEventListener("click", (e) => {
			e.preventDefault()
			callback()
		})
	}
}
