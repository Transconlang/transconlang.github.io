'use client';

import { RootUrl } from '@/lib/constants';
import { FullEntry } from '@/lib/types';
import { useState, useEffect, memo, useDeferredValue } from 'react';
import { Input } from './ui/input';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from './ui/dialog';
import { BookText } from 'lucide-react';
import { trimWordType } from '@/lib/formatting';
import MiniSearch from 'minisearch';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

function SearchPage() {
	const [fullSpec, setFullSpec] = useState<FullEntry[]>([]);
	const [searchValue, setSearchValue] = useState('');
	const deferredSearchValue = useDeferredValue(searchValue).toLowerCase();

	const isDeferring = searchValue !== deferredSearchValue;

	const MS = new MiniSearch<FullEntry>({
		fields: ['word', 'meaning', 'impl', 'obscurism'],
		storeFields: ['word', 'meaning', 'impl', 'obscurism', 'type', 'id'],
		extractField: (document, fieldName) =>
			fieldName === 'id'
				? `${document.word}_${document.type}`
				: (document[fieldName as keyof FullEntry] ?? ''),
		searchOptions: {
			boost: { word: 2, meaning: 1.5, impl: 1, obscurism: 2 },
			fields: ['word', 'meaning', 'impl', 'obscurism'],
			fuzzy: 0.2
		}
	});
	MS.addAll(fullSpec);

	const filtered =
		deferredSearchValue.length > 0
			? MS.search(deferredSearchValue.toLowerCase())
			: [];

	useEffect(() => {
		fetch(`${RootUrl}/langspec/complete.json`)
			.then(res => res.json())
			.then(v => setFullSpec(v));
	}, []);

	return (
		<>
			<Input
				type='search'
				id='input'
				placeholder='kumi'
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
				className='grow-0'
			/>
			<hr className='h-1 bg-yellow my-4 grow-0' />
			{deferredSearchValue.length === 0 ? (
				<p
					className='text-red text-center font-bold'
					style={{
						filter: isDeferring ? 'blur(1px)' : 'none'
					}}
				>
					Please enter a search term
				</p>
			) : filtered.length === 0 ? (
				<p
					className='text-red text-center font-bold'
					style={{
						filter: isDeferring ? 'blur(1px)' : 'none'
					}}
				>
					No results found
				</p>
			) : (
				<ScrollArea type='always'>
					{filtered.map(entry => (
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: '6fr 6fr 1fr',
								gap: '1rem',
								filter: isDeferring ? 'blur(1px)' : 'none'
							}}
							key={`${entry.word}_${entry.type}`}
						>
							<h4 className='text-base font-bold font-serif mb-2'>
								{entry.word} ({`${trimWordType(entry.type)}.`})
							</h4>
							<p className='overflow-scroll'>{entry.meaning}</p>
							{entry.impl || entry.obscurism ? (
								<Dialog>
									<DialogTrigger asChild>
										<BookText />
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>{entry.word}</DialogTitle>
											<DialogDescription>{entry.meaning}</DialogDescription>
										</DialogHeader>
										{entry.impl && <p>Implication: {entry.impl}</p>}
										{entry.obscurism && <p>Obscurism: {entry.obscurism}</p>}
									</DialogContent>
								</Dialog>
							) : (
								<p></p>
							)}
						</div>
					))}
					<ScrollBar />
				</ScrollArea>
			)}
		</>
	);
}

export default memo(SearchPage);
