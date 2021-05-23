import { useEffect, useState } from 'react'
//
export default useMemoryLeak = () => {
	const [pageLoading, setPageLoading] = useState(false)
	useEffect((props) => {
		let unmounted = false

		setPageLoading(true)

		props
			.dispatch(fetchCourses())
			.then(() => {
				if (!unmounted) {
					setPageLoading(false)
				}
			})
			.catch((error) => {
				if (!unmounted) {
					toast.error(error)
					setPageLoading(false)
				}
			})

		return () => {
			unmounted = true
		}
	}, [])
}
