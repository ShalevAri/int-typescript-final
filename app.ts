const confirmButton = document.querySelector(
  ".confirm-button",
) as HTMLButtonElement

const totalDeliveryAmount = document.querySelector(
  ".total-delivery-amount",
) as HTMLSpanElement

const state = document.querySelector(".state") as HTMLHeadingElement

let submitCount = 0

function incrementCount() {
  submitCount += 1
}

confirmButton.addEventListener("click", (e) => {
  e.preventDefault()
  incrementCount()
  let submitCountToDisplay = submitCount.toString()

  totalDeliveryAmount.innerHTML = submitCountToDisplay

  if (submitCount === 1) {
    state.innerHTML = ":)"
  }
})
