import { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'
// ---
export default useKeyboard = () => {
	const [isKeyboarrdShow, setIsKeyboardShow] = useState(
		false
	)

	useEffect(() => {
		Keyboard.addListener('keyboardDidShow', () =>
			setIsKeyboardShow(true)
		)
		Keyboard.addListener('keyboardDidHide', () =>
			setIsKeyboardShow(false)
		)

		return () => {
			Keyboard.removeListener('keyboardDidShow', () =>
				setIsKeyboardShow(true)
			)
			Keyboard.removeListener('keyboardDidHide', () =>
				setIsKeyboardShow(false)
			)
		}
	}, [])

	return isKeyboarrdShow
}
