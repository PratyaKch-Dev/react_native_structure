import Orientation from 'react-native-orientation-locker'
import useLifecycle from './useLifecycle'
// ---
export default (props) => {
	const _lock = () => {
		Orientation.lockToPortrait()
	}

	useLifecycle(props, {
		willMount: () => {
			_lock()
		},
		unMount: () => {
			_lock()
		},
	})
}
