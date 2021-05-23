export const hexToRgba = (color, opacity = 1) => {
	var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
		color
	)
	return rgb
		? `rgba(
				${parseInt(rgb[1], 16)},
				${parseInt(rgb[2], 16)},
        ${parseInt(rgb[3], 16)},
        ${opacity}
        )
		  `
		: color
}
