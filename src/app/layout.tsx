import type { Metadata } from 'next';
import './globals.css';
import { RootUrl } from '@/lib/constants';
import { cn } from '@/lib/utils';
import ThemeButton from '@/components/darkmode/themebutton';
import { Open_Sans as FontSans, Vollkorn as FontSerif } from 'next/font/google';

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
});
export const fontSerif = FontSerif({
	subsets: ['latin'],
	variable: '--font-serif'
});

export const metadata: Metadata = {
	title: {
		absolute: 'Kumilinwa',
		default: 'Kumilinwa',
		template: '%s | Kumilinwa'
	},
	description: 'The official Kumilinwa dictionary app!',
	openGraph: {
		type: 'website',
		locale: 'en-US',
		url: RootUrl,
		title: 'Kumilinwa',
		description: 'The official Kumilinwa dictionary app!',
		siteName: 'Kumilinwa',
		images: [{ url: `${RootUrl}/flag.png` }]
	},
	icons: [`${RootUrl}/icons/192x192.png`]
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSerif.variable,
					fontSans.variable
				)}
			>
				{children}
				<ThemeButton />
			</body>
		</html>
	);
}
