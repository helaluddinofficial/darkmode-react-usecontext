import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useParalox = () => {
	const [scrollY, setScrollY] = useState(0)
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
			window.addEventListener("scroll", handleScroll)
		}
		return () => {
			window.removeEventListener("scroll",handleScroll)
		}
	},[])
	return scrollY
}

export { useParalox }
