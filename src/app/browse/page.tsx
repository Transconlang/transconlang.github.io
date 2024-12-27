import Link from '@/components/misc/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Browse'
};

export default function Browse() {
	return (
		<main className='min-h-screen grid place-content-center text-center bg-blue gap-8'>
			<h1 className='text-2xl font-bold font-serif'>Browsing</h1>
		</main>
	);
}
