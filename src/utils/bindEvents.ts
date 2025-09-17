export class Events {
	public static bindEvents(btn: HTMLButtonElement, show: () => void): void {
		btn?.addEventListener('click', () => {
			show()
		})
	}

	public static inputEvents(
		input: HTMLInputElement,
		regExpString: RegExp
	): void {
		input?.addEventListener('input', function (this: HTMLInputElement) {
			this.value = this.value.replace(regExpString, '')
		})
	}
}
