export class Utils {
	static isAnagram(text1: string, text2: string): boolean {
		let str = ''
		let textCopy = text2
		for (let char of text1) {
			if (textCopy.includes(char)) {
				str += char
				textCopy = textCopy.replace(char, '')
			}
		}
		return str.length === text1.length && text1.length === text2.length
	}
	static getMaxPrices(pricesArray: number[]): number {
		let minPrice = Infinity
		let maxProfit = 0
		for (const price of pricesArray) {
			if (price < minPrice) minPrice = price
			else if (price - minPrice > maxProfit) maxProfit = price - minPrice
		}
		return maxProfit
	}

	static mergeArrays(
		nums1: number[],
		nums2: number[],
		m: number,
		n: number
	): void {
		let i = m - 1
		let j = n - 1
		let k = m + n - 1

		while (j >= 0) {
			if (i >= 0 && nums1[i] > nums2[j]) {
				nums1[k] = nums1[i]
				i--
			} else {
				nums1[k] = nums2[j]
				j--
			}
			k--
		}
	}

	static isValidBrackets(str: string): boolean {
		const stack: string[] = []
		const pairs: { [key: string]: string } = {
			'(': ')',
			'[': ']',
			'{': '}',
		}

		for (const char of str) {
			if (char in pairs) {
				stack.push(char)
			} else if (Object.values(pairs).includes(char)) {
				const last = stack.pop()
				if (!last || pairs[last] !== char) {
					return false
				}
			}
		}

		return stack.length === 0
	}
}
