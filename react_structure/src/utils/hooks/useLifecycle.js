import { useEffect } from 'react'
import { Platform } from 'react-native'
import { Navigation } from 'react-native-navigation'
// ---

export default (
	props,
	{
		unMount = () => null,
		willMount = () => null,
		didUpdate = () => null,
	}
) => {
	const { parentComponentId } = props
	useEffect(() => {
		didUpdate()
	})

	useEffect(() => {
		let unmounted = false
		willMount()

		if (Platform.OS === 'android') {
			const listener = {
				componentDidDisappear: () => {
					unMount()
				},
			}

			if (parentComponentId) {
				const unsubscribe = Navigation.events().registerComponentListener(
					listener,
					parentComponentId
				)

				return () => {
					unMount()
					unsubscribe.remove()
				}
			}

			return () => {
				unMount()
				unmounted = true
			}
		} else {
			return () => {
				unMount()
				unmounted = true
			}
		}
	}, [])
}
