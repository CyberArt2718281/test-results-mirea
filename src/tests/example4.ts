import { Events } from '../utils/bindEvents';
import { Utils } from '..//utils/utils'
import { ElementInfo } from '..//utils/elementsInfo'

export class Example4 {
	private inputText1: HTMLInputElement | null = null
	private inputText2: HTMLInputElement | null = null

	private result: HTMLElement | null = null
	private checkButton: HTMLButtonElement | null = null

	constructor() {
		this.findElements()

		Events.inputEvents.call(this,this.inputText1 as HTMLInputElement, /([^a-z])/gi)
		Events.inputEvents.call(this,this.inputText2 as HTMLInputElement, /([^a-z])/gi)

		if (this.checkButton) {
			Events.bindEvents(this.checkButton, this.showResultAnagram.bind(this))
		}
	}

	private findElements(): void {
		this.inputText1 = document.getElementById('inputText1') as HTMLInputElement
		this.inputText2 = document.getElementById('inputText2') as HTMLInputElement

		this.result = document.getElementById('example4-result') as HTMLElement
		this.checkButton = document.getElementById(
			'checkButton4'
		) as HTMLButtonElement
	}



	private showResultAnagram(): void {
		const text1 = this.inputText1?.value?.trim()
		const text2 = this.inputText2?.value?.trim()
		if (!this.result) return
		if (!text1 || !text2) {
			this.result.innerHTML = ElementInfo.warningElement();
			return
		}
		if (Utils.isAnagram(text1.toLowerCase(), text2.toLowerCase())) {
			this.result.innerHTML = ElementInfo.successElement(text1,text2)
		} else {
			this.result.innerHTML = ElementInfo.errorElement(text1,text2)
		}
	}
}
