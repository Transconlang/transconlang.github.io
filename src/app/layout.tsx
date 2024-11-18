import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { RootUrl } from '@/lib/constants';
import { cn } from '@/lib/utils';
import ThemeButton from '@/components/darkmode/themebutton';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

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
		images: [{ url: `${RootUrl}/og-image.png` }]
	},
	icons: [`${RootUrl}/flag.png`]
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
					fontSans.variable
				)}
			>
				{children}
				<ThemeButton />
			</body>
		</html>
	);
}
