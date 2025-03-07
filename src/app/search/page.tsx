import SearchPage from '@/components/searchpage';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Search'
};

export default function Search() {
	return (
		<main className='bg-blue !h-screen !max-h-screen flex flex-col items-stretch justify-stretch'>
			<h1 className='text-2xl font-bold font-serif mb-2 text-center'>
				Full Search
			</h1>
			<SearchPage />
		</main>
	);
}
