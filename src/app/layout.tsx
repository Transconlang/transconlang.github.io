import type { Metadata } from 'next';
import './globals.css';
import { RootUrl } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Open_Sans as FontSans, Vollkorn as FontSerif } from 'next/font/google';
import Link from '@/components/misc/link';
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
