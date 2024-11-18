'use client';

import { useIsSystemDark } from '@/hooks/useIsSystemDark';
import { useStickyState } from '@/hooks/useStickyState';
import { Theme, ThemeState } from './types';
import { MonitorSmartphone, MoonStar, Sun } from 'lucide-react';

export default function ThemeButton() {
	const [theme, setTheme] = useStickyState<ThemeState>('system', 'theme');
	const systemTheme = (
		useIsSystemDark().systemThemeDark ? 'dark' : 'light'
	) as Theme;

	const themeArr = ['system', 'dark', 'light'];

	return (
		<button
			onClick={() => {
				const index = themeArr.indexOf(theme);
				const nextIndex = (index + 1) % themeArr.length;
				setTheme(themeArr[nextIndex]);
			}}
			className="bg-[#8996af88] absolute bottom-4 left-4 p-2 rounded-lg hover:scale-105"
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
