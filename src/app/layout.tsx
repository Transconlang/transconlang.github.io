import type { Metadata, Viewport } from 'next';
import './globals.css';
import { RootUrl } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Open_Sans as FontSans, Vollkorn as FontSerif } from 'next/font/google';
import Link from '@/components/link';
import { BookOpenText, Home, Search } from 'lucide-react';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
});
const fontSerif = FontSerif({
	subsets: ['latin'],
	variable: '--font-serif'
});

export const metadata: Metadata = {
	applicationName: 'Te Tobacun Kumilinwa',
	appleWebApp: {
		capable: true,
		statusBarStyle: 'default',
		title: 'Te Tobacun Kumilinwa'
	},
	formatDetection: {
		telephone: false,
		email: false,
		address: false,
		date: false
	},
	title: {
		absolute: 'Te Tobacun Kumilinwa',
		default: 'Te Tobacun Kumilinwa',
		template: '%s | Te Tobacun Kumilinwa'
	},
	description: 'Te Tobacun Kumilinwa "Official"',
	openGraph: {
		type: 'website',
		locale: 'en-US',
		url: RootUrl,
		title: 'Te Tobacun Kumilinwa',
		description: 'Te Tobacun Kumilinwa "Official"',
		siteName: 'Te Tobacun Kumilinwa',
		images: [{ url: `${RootUrl}/flag.png`, type: 'image/png' }]
	},
	icons: [
		`${RootUrl}/icons/192x192.png`,
		`${RootUrl}/icons/512x512.png`,
		`${RootUrl}/icons/1000x1000.png`
	],
	manifest: `${RootUrl}/manifest.json`
};

export const viewport: Viewport = {
	themeColor: '#F4A9B8'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSerif.variable,
					fontSans.variable
				)}
				suppressHydrationWarning
			>
				<div className='search flex flex-row justify-start gap-2 p-1 bg-pink text-white'>
					<Link href='/'>
						<Home />
					</Link>
					<Link href='/browse/'>
						<BookOpenText />
					</Link>
					<Link href='/search/'>
						<Search />
					</Link>
				</div>
				{children}
			</body>
		</html>
	);
}
