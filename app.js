const tipAmount = document.querySelector('#tip-amount')
const totalPerPerson = document.querySelector('#total-per-person')
const billAmountInput = document.querySelector('#bill-amount')
const numberOfPeople = document.querySelector('#number-of-people')
const calculateBtn = document.querySelector('#calculate')
const tipPercentages = document.querySelectorAll('.tip-percentages input')

const countEverything = () => {
	for (const tip of tipPercentages) {
		if (tip.type === 'radio' && tip.checked && billAmountInput.value != '0') {
			const tipValue = tip.value
			const amount = parseInt(billAmountInput.value)
			const people = parseInt(numberOfPeople.value)
			const newTipAmount = parseInt((tipAmount.textContent = (tipValue * amount).toFixed(2)))

			totalPerPerson.textContent = ((amount + newTipAmount) / people).toFixed(2)
		}
	}
}
calculateBtn.addEventListener('click', countEverything)
