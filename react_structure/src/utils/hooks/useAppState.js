import { useEffect, useState } from 'react'
import { AppState } from 'react-native'

export default useAppState = () => {
	const [appState, setAppState] = useState(null) // inactive, // active, // background

	const handleChange = (newState) => {
		setAppState(newState)
	}

	useEffect(() => {
		AppState.addEventListener('change', handleChange)

		return () => {
			AppState.removeEventListener('change', handleChange)
		}
	}, [])

	return appState
}
