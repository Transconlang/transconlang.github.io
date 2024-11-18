export function generateGradientString(colors: string[]) {
	const numOfColors = colors.length;
	const segmentHeight = 100 / numOfColors;
	const gradientStops = colors.map((color, index) => {
		const start = index * segmentHeight;
		const end = (index + 1) * segmentHeight;
		return `${color} ${start}% ${end}%`;
	});
	return `linear-gradient(to bottom, ${gradientStops.join(', ')})`;
}
