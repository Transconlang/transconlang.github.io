export const Colors = {
	rainbow: [
		'hsl(0deg 0% 18%)',
		'hsl(30deg 60% 30%)',
		'hsl(0deg 90% 55%)',
		'hsl(30deg 95% 65%)',
		'hsl(55deg 90% 65%)',
		'hsl(100deg 65% 45%)',
		'hsl(220deg 80% 55%)',
		'hsl(265deg 80% 50%)'
	],
	/**
		'rainbow-original': [
			'hsl(0deg 90% 55%)',
			'hsl(30deg 95% 65%)',
			'hsl(55deg 90% 65%)',
			'hsl(100deg 65% 45%)',
			'hsl(220deg 80% 55%)',
			'hsl(265deg 80% 50%)'
		],
	*/
	trans: [
		'hsl(200deg 85% 70%)',
		'hsl(350deg 85% 85%)',
		'hsl(0deg 0% 100%)',
		'hsl(350deg 85% 85%)',
		'hsl(200deg 85% 70%)'
	],
	pan: ['#FF218C', '#FFD800', '#21B1FF'],
	enby: ['#FCF434', 'white', '#9C59D1', 'black'],
	ace: ['black', '#A3A3A3', 'white', '#800080'],
	agender: ['black', '#BCC4C7', 'white', '#B7F684']
};

export const DefaultFlagProps = {
	variant: 'rainbow' as keyof typeof Colors,
	cols: 12,
	delay: 75,
	speed: 750,
	shift: 12,
	width: 256,
	radius: 24,
	borderColor: 'unset',
	borderWidth: 2
};
