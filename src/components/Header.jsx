import React from 'react'
import ToggleButton from './ToggleButton'
import Container from './Container'

const Header = () => {
	return (
		<div className='bg-emerald-400/45 fixed top-20 md:left-1/3 left-10 items-center p-5 font-bold  rounded-full justify-between gap-10 flex list-none text-gray-500'>
			<li>Home</li>
			<li>About</li>
			<li>Contact </li>
			<li><ToggleButton/></li>
		</div>
	)
}

export default Header
