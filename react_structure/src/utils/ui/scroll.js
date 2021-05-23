/**
 * isCloseToBottom for check scroll on bottom
 * @param {object} layoutMeasurement 
 * @param {object} contentOffset 
 * @param {object} contentSize 
 
<ScrollView
	onScroll={({ nativeEvent }) => {
		if (isCloseToBottom(nativeEvent)) {
			// apply load more function here
		}
	}}
	scrollEventThrottle={400}
>
	<ComponentWrapper />
</ScrollView>
 */

export const isCloseToBottom = ({
	layoutMeasurement,
	contentOffset,
	contentSize,
	bottom,
}) => {
	const paddingToBottom = bottom ? bottom : 20
	return (
		layoutMeasurement.height + contentOffset.y >=
		contentSize.height - paddingToBottom
	)
}
