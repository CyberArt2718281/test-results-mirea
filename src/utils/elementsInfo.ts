export class ElementInfo {
	static errorElement(text1: string, text2?: string) {
		if (text1 && text2) {
			return `
				<div class="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
					<div class="w-5 h-5 mr-3 text-red-600">❌</div>
					<span class="text-red-800 font-medium">Слова "${text1}" и "${text2}" не являются анаграммами.</span>
				</div>
			`
		} else {
			return `
				<div class="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
					<div class="w-5 h-5 mr-3 text-red-600">❌</div>
					<span class="text-red-800 font-medium">${text1}</span>
				</div>
			`
		}
	}
	static warningElement(text?: string): string {
		if (text) {
			return `<div class="flex items-center p-3 bg-amber-50 border border-amber-200 rounded-lg">
					<div class="w-5 h-5 mr-3 text-amber-600">⚠️</div>
					<span class="text-amber-800 font-medium">${text}</span>
				</div>`
		}
		return `
				<div class="flex items-center p-3 bg-amber-50 border border-amber-200 rounded-lg">
					<div class="w-5 h-5 mr-3 text-amber-600">⚠️</div>
					<span class="text-amber-800 font-medium">Пожалуйста, заполните все поля ввода.</span>
				</div>
			`
	}
	static successElement<T>(textOrArray: string | T, text2?: string | number, currentRequest?:number[]):string {
		if (Array.isArray(textOrArray)) {
			return `   <div class="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                            <div class="w-5 h-5 mr-3 text-green-600">✅</div>
                            <span class="text-green-800 font-medium">Результат: [${textOrArray}]</span>
                        </div>`
		} else if (typeof textOrArray === 'string' && text2) {
			return `<div class="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
					<div class="w-5 h-5 mr-3 text-green-600">✅</div>
					<span class="text-green-800 font-medium">Слова "${textOrArray}" и "${text2}" являются анаграммами.</span>
				</div>
			`
		}else if (typeof textOrArray === 'number' && typeof text2 === "number" && Array.isArray(currentRequest)){
			return `
			<div class="space-y-3">
				<div class="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
					<div class="w-5 h-5 mr-3 text-green-600">✅</div>
					<div>
						<div class="text-green-800 font-medium">Результат : ${text2}</div>
						<div class="text-green-600 text-sm mt-1">
							Диапазон: [${textOrArray - 3000}, ${textOrArray}]
						</div>
					</div>
				</div>
				<div class="text-sm text-gray-600">
					<div><strong>Все запросы:</strong> [${currentRequest.join(', ')}]</div>
					<div><strong>Количество в диапазоне:</strong> ${text2}</div>
				</div>
			</div>
		`
		}
		return`   <div class="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                            <div class="w-5 h-5 mr-3 text-green-600">✅</div>
                            <span class="text-green-800 font-medium">Результат: ${textOrArray}</span>
                        </div>`
	}
	static emptyElement(text: string): string {
		return `
				<div class="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
					<div class="w-5 h-5 mr-3 text-blue-600">ℹ️</div>
					<span class="text-blue-800">${text}</span>
				</div>
			`
	}
}
