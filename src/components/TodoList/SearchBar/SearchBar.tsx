import React from 'react'
import GlobalSvgSelector from '../../../assets/GlobalSvgSelector';

type Props = {
	text: string,
	handleSearchText: () => void,
	handleClear: () => void
}

export const SearchBar = ({ text, handleSearchText, handleClear }: Props) => {
	return (
		<div className='todo-list__search'>
			<input type='search' className='todo-input search-input' placeholder='Search' autoFocus
				value={text} onChange={handleSearchText}
			/>
			<div onClick={handleClear}>
				<GlobalSvgSelector id='clear-button' />
			</div>
		</div>
	)
}
