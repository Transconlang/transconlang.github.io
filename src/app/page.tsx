import Link from '@/components/misc/link';

export default function Home() {
	return (
		<main className="min-h-screen grid place-content-center bg-blue dark:bg-purple gap-8">
			<h1 className="text-2xl font-bold font-serif">
				The ✨Official✨ Kumilinwa Dictionary
			</h1>
			<Link
				href="/search/"
				className="text-xl font-bold text-purple dark:text-yellow"
			>
				Search
			</Link>
			<Link
				href="/browse/"
				className="text-xl font-bold text-purple dark:text-yellow"
			>
				Browse
			</Link>
		</main>
	);
}
