import { Events } from '../utils/bindEvents'
import { ElementInfo } from '../utils/elementsInfo'
import { Utils } from '../utils/utils'

export class Example2 {
	private exampleInputNums1: HTMLInputElement | null = null
	private exampleInputNums2: HTMLInputElement | null = null
	private exampleInputN: HTMLInputElement | null = null
	private exampleInputM: HTMLInputElement | null = null
	private result: HTMLElement | null = null
	private checkButton: HTMLButtonElement | null = null

	constructor() {
		this.findElements()

		Events.inputEvents.call(
			this,
			this.exampleInputN as HTMLInputElement,
			/[^\d]/g
		)

		Events.inputEvents.call(
			this,
			this.exampleInputM as HTMLInputElement,
			/[^\d]/g
		)

		Events.inputEvents.call(
			this,
			this.exampleInputNums1 as HTMLInputElement,
			/[^\d\[\],]/g
		)

		Events.inputEvents.call(
			this,
			this.exampleInputNums2 as HTMLInputElement,
			/[^\d\[\],]/g
		)

		if (this.checkButton) {
			Events.bindEvents(this.checkButton, this.showResultMerge.bind(this))
		}
	}

	private findElements(): void {
		this.exampleInputNums1 = document.getElementById(
			'inputNums1'
		) as HTMLInputElement
		this.exampleInputNums2 = document.getElementById(
			'inputNums2'
		) as HTMLInputElement
		this.exampleInputN = document.getElementById('inputN') as HTMLInputElement
		this.exampleInputM = document.getElementById('inputM') as HTMLInputElement
		this.result = document.getElementById('example2-result') as HTMLElement
		this.checkButton = document.getElementById(
			'checkButton2'
		) as HTMLButtonElement
	}

	private showResultMerge(): void {
		const nums1Str = this.exampleInputNums1?.value
			?.trim()
			.replace(/[\[\]]/g, '')
		const nums2Str = this.exampleInputNums2?.value
			?.trim()
			.replace(/[\[\]]/g, '')
		const nStr = this.exampleInputN?.value?.trim()
		const mStr = this.exampleInputM?.value?.trim()
		if (!this.result) return
		if (!nStr || !mStr) {
			this.result.innerHTML = ElementInfo.warningElement()
			return
		}

		const nums1Original = nums1Str
			? nums1Str
					.split(',')
					.map(item => parseInt(item))
					.filter(num => !isNaN(num))
			: []
		const nums2 = nums2Str
			? nums2Str
					.split(',')
					.map(item => parseInt(item))
					.filter(num => !isNaN(num))
			: []
		const n = parseInt(nStr)
		const m = parseInt(mStr)

		if (n + m === 0) {
			const warningString = 'Пожалуйста, введите натуральные числа'
			this.result.innerHTML = ElementInfo.warningElement(warningString)
			return
		}

		const nums1 = new Array(m + n).fill(0)

		for (let i = 0; i < m && i < nums1Original.length; i++) {
			nums1[i] = nums1Original[i]
		}

		Utils.mergeArrays(nums1, nums2, m, n)
		this.result.innerHTML = ElementInfo.successElement<number[]>(nums1)
	}
}
