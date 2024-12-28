import FullBrowserPage from '@/components/fullbrowserpage';
import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Browse'
};

export default function Browse() {
	return (
		<main className='min-h-screen grid place-content-center text-center bg-blue'>
			<h1 className='text-2xl font-bold font-serif mb-2'>Browsing</h1>
			<FullBrowserPage />
		</main>
	);
}
