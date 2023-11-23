export class View {
	private confirmButton: HTMLButtonElement
	private cancelButton: HTMLButtonElement
	private recipientName: HTMLInputElement
	private location: HTMLSelectElement
	private time: HTMLSelectElement

	constructor() {
		this.confirmButton = document.querySelector(
			".confirm-button"
		) as HTMLButtonElement
		this.cancelButton = document.querySelector(
			".cancel-button"
		) as HTMLButtonElement
		this.recipientName = document.querySelector(
			".person-name"
		) as HTMLInputElement
		this.location = document.querySelector(".location") as HTMLSelectElement
		this.time = document.querySelector(".time") as HTMLSelectElement
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

	bindRecipientName(callback: () => void): void {
		this.recipientName.addEventListener("click", (e) => {
			e.preventDefault()
			callback()
		})
	}

	bindLocation(callback: () => void): void {
		this.location.addEventListener("select", (e) => {
			e.preventDefault()
			callback()
		})
	}

	bindTime(callback: () => void): void {
		this.time.addEventListener("select", (e) => {
			e.preventDefault()
			callback()
		})
	}
}
