import { Events } from '../utils/bindEvents'
import { ElementInfo } from '../utils/elementsInfo'
import { Utils } from '../utils/utils'

export class Example3 {
	private exampleInputPrices: HTMLInputElement | null = null

	private result: HTMLElement | null = null
	private checkButton: HTMLButtonElement | null = null

	constructor() {
		this.findElements()
		Events.inputEvents.call(
			this,
			this.exampleInputPrices as HTMLInputElement,
			/[^\d\[\],]/g
		)

		if (this.checkButton) {
			Events.bindEvents(this.checkButton, this.showResultPrices.bind(this))
		}
	}

	private findElements(): void {
		this.exampleInputPrices = document.getElementById(
			'inputPrices'
		) as HTMLInputElement

		this.result = document.getElementById('example3-result') as HTMLElement
		this.checkButton = document.getElementById(
			'checkButton3'
		) as HTMLButtonElement
	}

	private showResultPrices(): void {
		const pricesArrayStr = this.exampleInputPrices?.value
			?.trim()
			.replace(/[\[\]]/g, '')
		if (!this.result) return
		if (!pricesArrayStr) {
			this.result.innerHTML = ElementInfo.warningElement()
			return
		}

		const pricesArray = pricesArrayStr
			? pricesArrayStr.split(',').map(item => parseInt(item))
			: []


		const resPrices: number = Utils.getMaxPrices(
			pricesArray
		)
		this.result.innerHTML = ElementInfo.successElement<number>(resPrices)
	}
}
