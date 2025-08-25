import React from 'react'
import Button from './Button'
import { useContext } from 'react'
import { DarkModeContext } from '../hooks/DarkModeProvider'
import { Moon } from 'lucide-react'
import { Sun } from 'lucide-react'

const ToggleButton = () => {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
	const handleClick = () => {
		toggleDarkMode()
	}
	return (
		<div onClick={handleClick}>
		 {darkMode? <Moon/>:<Sun/>} 
		</div>
	)
}

export default ToggleButton
