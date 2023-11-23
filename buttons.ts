const confirmButton = document.querySelector(
	".confirm-button"
) as HTMLButtonElement
const cancelButton = document.querySelector(
	".cancel-button"
) as HTMLButtonElement

confirmButton.addEventListener("click", (e) => {
	e.preventDefault
	alert("Your data has been submitted")
})

cancelButton.addEventListener("click", (e) => {
	e.preventDefault
	alert("Your data has been cancelled")
})
