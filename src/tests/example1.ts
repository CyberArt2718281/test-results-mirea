import { Events } from '../utils/bindEvents'
import { ElementInfo } from '../utils/elementsInfo'
import { Utils } from '../utils/utils'

export class Example1 {
	private exampleInput: HTMLInputElement | null = null
	private result: HTMLElement | null = null
	private checkButton: HTMLButtonElement | null = null

	constructor() {
		this.findElements()
		if (this.checkButton) {
			Events.bindEvents(this.checkButton, this.checkMethodString.bind(this))
		}
	}

	private findElements(): void {
		this.exampleInput = document.getElementById('input1') as HTMLInputElement
		this.result = document.getElementById('example1-result') as HTMLElement
		this.checkButton = document.getElementById(
			'checkButton'
		) as HTMLButtonElement
	}


	public checkMethodString(): void {
		const input = this.exampleInput?.value?.trim()
		if (!this.result) return

		if (!input) {
			const warningString = 'Введите строку для проверки';
			this.result.innerHTML = ElementInfo.warningElement(warningString)
			return
		}

		const hasBrackets = /[\(\)\[\]\{\}]/.test(input)
		if (!hasBrackets) {
			const emptyString = 'Строка не содержит скобок. Добавьте скобки: ( ) [ ] { }'
			this.result.innerHTML = ElementInfo.emptyElement(emptyString)
			return
		}

		if (Utils.isValidBrackets(input)) {
			const successString = "Все открывающие скобки имеют соответствующие закрывающие"
			this.result.innerHTML = ElementInfo.successElement(successString)
		} else {
			const errorString = 'Проверьте, что все скобки правильно открыты и закрыты';
			this.result.innerHTML = ElementInfo.errorElement(errorString);
		}
	}
}
