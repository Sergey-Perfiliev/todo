type Props = {
	id: 'add-button' | 'delete-button' | 'clear-button';
}

const GlobalSvgSelector = ({ id }: Props) => {
	switch (id) {
		case 'add-button':
			return <svg
				width="13"
				height="13"
			>
				<path
					d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
					fill="currentColor"
					fillRule="evenodd"
				>
				</path>
			</svg>
		case 'delete-button':
			return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
				<g fill="none" fillRule="evenodd">
					<path d="M0 0h24v24H0z"></path>
					<rect width="14" height="1" x="5" y="6" fill="currentColor" rx=".5"></rect>
					<path fill="currentColor" d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"></path>
					<path stroke="currentColor" d="M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z"></path>
				</g>
			</svg>
		case 'clear-button':
			return <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
				<path d="m6.062 14.708-.77-.77L9.229 10 5.292 6.062l.77-.77L10 9.229l3.938-3.937.77.77L10.771 10l3.937 3.938-.77.77L10 10.771Z" />
			</svg>
		default:
			return null;
	}
}

export default GlobalSvgSelector
