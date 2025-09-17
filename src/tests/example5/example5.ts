import { Events } from '../../utils/bindEvents'
import { ElementInfo } from '../../utils/elementsInfo'
import { RecentCounter } from './RecentCounter'

export class Example5 {
	private inputPing: HTMLInputElement | null = null
	private result: HTMLElement | null = null
	private checkButton: HTMLButtonElement | null = null
	private resetButton: HTMLButtonElement | null = null
	private recentCounter: RecentCounter = new RecentCounter()

	constructor() {
		this.findElements()

		Events.inputEvents(this.inputPing as HTMLInputElement, /([^\d])/g)

		if (this.checkButton) {
			Events.bindEvents(this.checkButton, this.showResultPing.bind(this))
		}

		if (this.resetButton) {
			Events.bindEvents(this.resetButton, this.resetCounter.bind(this))
		}
	}

	private findElements(): void {
		this.inputPing = document.getElementById('inputPing') as HTMLInputElement
		this.result = document.getElementById('example5-result') as HTMLElement
		this.checkButton = document.getElementById(
			'checkButton5'
		) as HTMLButtonElement
		this.resetButton = document.getElementById(
			'resetButton5'
		) as HTMLButtonElement
	}

	private resetCounter(): void {
		this.recentCounter.reset()
		if (this.result) {
			this.result.innerHTML = ElementInfo.successElement('Счетчик сброшен')
		}
		if(this.inputPing){
			this.inputPing.innerText = '';
		}
	}

	private showResultPing(): void {
		const ping = this.inputPing?.value?.trim()

		if (!this.result) return
		if (!ping) {
			this.result.innerHTML = ElementInfo.warningElement()
			return
		}

		const pingNumber = parseInt(ping)

		if (isNaN(pingNumber) || pingNumber < 1) {
			this.result.innerHTML = ElementInfo.errorElement(
				'Введите корректное время (≥ 1)'
			)
			return
		}

		const requests = this.recentCounter.getRequests()
		if (requests.length > 0 && pingNumber <= requests[requests.length - 1]) {
			this.result.innerHTML = ElementInfo.errorElement(
				'Время должно быть больше предыдущего...'
			)
			return
		}

		const pingResult = this.recentCounter.ping(pingNumber)
		const currentRequests = this.recentCounter.getRequests()

		this.result.innerHTML = ElementInfo.successElement(
			pingNumber,
			pingResult,
			currentRequests
		)
		if (this.inputPing) {
			this.inputPing.value = ''
		}
	}
}
