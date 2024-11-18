import { CSSProperties } from 'react';
import './styles.css';
import { Colors, DefaultFlagProps } from './constants';
import { generateGradientString } from './helpers';
import range from 'lodash/range';

export default function Flag({
	variant = DefaultFlagProps.variant,
	cols = DefaultFlagProps.cols,
	delay = DefaultFlagProps.delay,
	speed = DefaultFlagProps.speed,
	shift = DefaultFlagProps.shift,
	width = DefaultFlagProps.width,
	radius = DefaultFlagProps.radius,
	borderColor = DefaultFlagProps.borderColor,
	borderWidth = DefaultFlagProps.borderWidth
}: {
	variant?: keyof typeof Colors;
	cols?: number;
	delay?: number;
	speed?: number;
	shift?: number;
	width?: number;
	radius?: number;
	borderColor?: string;
	borderWidth?: number;
}) {
	const firstColDelay = cols * delay * -1;
	width = Math.round(width / cols) * cols;

	return (
		<div
			className='flag'
			style={{
				width: width + 'px'
			}}
		>
			{range(cols).map(index => (
				<div
					key={index}
					className='col'
					style={
						{
							'--shift': ((shift / cols) * index).toString() + 'px',
							'--radius': radius + 'px',
							borderColor,
							borderWidth,
							animationDelay: firstColDelay + index * delay + 'ms',
							animationDuration: speed + 'ms',
							backgroundImage: generateGradientString(Colors[variant])
						} as CSSProperties
					}
				/>
			))}
		</div>
	);
}
