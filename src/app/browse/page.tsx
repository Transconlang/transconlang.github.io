import FullBrowserPage from '@/components/fullbrowserpage';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Browse'
};

export default function Browse() {
	return (
		<main className='bg-blue'>
			<h1 className='text-2xl font-bold font-serif mb-2 text-center'>
				Browsing
			</h1>
			<FullBrowserPage />
		</main>
	);
}
