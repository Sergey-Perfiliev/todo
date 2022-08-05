type Props = {
	id: string;
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
					fill-rule="evenodd"
				>
				</path>
			</svg>

		default:
			return null;
	}
}

export default GlobalSvgSelector
