export function resize() {
	const parent = document.querySelector('.todo-list'); // element to make resizable
	const resizer = document.querySelector('.column-resize')
	const coords = parent.getBoundingClientRect()
	let value

	resizer.addEventListener('mousedown', () => {
		document.onmousemove = (e) => {
			const delta = e.pageX - coords.right
			value = coords.width + delta
			parent.style.flexBasis = value + 'px'
		}

		document.onmouseup = (e) => {
			document.onmousemove = null
			document.onmouseup = null
		}
	})
}
