import FullBrowserPage from '@/components/fullbrowserpage';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Browse'
};

export default function Browse() {
	return (
		<main className='bg-blue !h-screen !max-h-screen flex flex-col items-stretch justify-stretch'>
			<h1 className='text-2xl font-bold font-serif mb-2 text-center grow-0'>
				Browsing
			</h1>
			<FullBrowserPage />
		</main>
	);
}
