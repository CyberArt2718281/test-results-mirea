import { Example1 } from './tests/example1'
import { Example3 } from './tests/example3'
import { Example2 } from './tests/example2'
import { Example4 } from './tests/example4'
import { Example5 } from './tests/example5/example5'

class App {
	constructor() {
		new Example1()
		new Example2()
		new Example3()
		new Example4()
		new Example5()
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new App()
})
