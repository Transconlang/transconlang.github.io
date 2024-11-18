'use client';

import { useIsSystemDark } from '@/hooks/useIsSystemDark';
import { useStickyState } from '@/hooks/useStickyState';
import { Theme, ThemeState } from './types';
import { MonitorSmartphone, MoonStar, Sun } from 'lucide-react';
import { useEffect } from 'react';

export default function ThemeButton() {
	const [theme, setTheme] = useStickyState<ThemeState>('system', 'theme');
	const systemTheme = (useIsSystemDark() ? 'dark' : 'light') as Theme;

	const themeArr = ['system', 'dark', 'light'];

	useEffect(() => {
		if (theme === 'dark' || (theme === 'system' && systemTheme === 'dark'))
			document.documentElement.classList.add('dark');
		else document.documentElement.classList.remove('dark');
	}, [theme]);

	return (
		<button
			onClick={() =>
				// @ts-expect-error stupid typescript
				setTheme(themeArr[(themeArr.indexOf(theme) + 1) % themeArr.length])
			}
			className="bg-[#8996af88] absolute bottom-4 right-4 p-2 rounded-lg hover:scale-105 white"
		>
			{theme === 'dark' ? (
				<MoonStar />
			) : theme === 'light' ? (
				<Sun />
			) : (
				<MonitorSmartphone /> /* System */
			)}
		</button>
	);
}
