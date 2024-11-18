'use client';

import { animated } from 'react-spring';

import { useBoop } from '@/hooks/useBoop';

export default function Boop({
	children,
	...boopConfig
}: {
	children: React.ReactNode;
}) {
	const [style, trigger] = useBoop(boopConfig);

	return (
		<animated.span onMouseEnter={trigger} style={style}>
			{children}
		</animated.span>
	);
}
