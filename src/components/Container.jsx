import React from 'react'
import { useContext } from 'react'
import { DarkModeContext } from '../hooks/DarkModeProvider'
import ToggleButton from './ToggleButton'

const Container = () => {
	const {darkMode}=useContext(DarkModeContext)
	return (
		<div className={darkMode? `Container Container-dark`:`Container Container-light`} >
			<ToggleButton/>
		</div>
	)
}

export default Container
