import React from 'react'

type Props = {
	text: string,
	handleSearchText: () => void
}

export const SearchBar = ({ text, handleSearchText }: Props) => {
		return (
		<div className='todo-list__search'>
			<input className='todo-input search-input' placeholder='Search' autoFocus
				value={text} onChange={handleSearchText}
			/>
		</div>
	)
}
