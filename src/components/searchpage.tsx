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
import { Label } from './ui/label';

function SearchPage() {
	const [fullSpec, setFullSpec] = useState<FullEntry[]>([]);
	const [searchValue, setSearchValue] = useState('');
	const deferredSearchValue = useDeferredValue(searchValue);

	const isDeferring = searchValue !== deferredSearchValue;

	const filtered = fullSpec.filter(
		entry =>
			entry.word.includes(deferredSearchValue) ||
			entry.meaning?.includes(deferredSearchValue) ||
			entry.impl?.includes(deferredSearchValue) ||
			entry.obscurism?.includes(deferredSearchValue)
	);

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
			/>
			<hr className='h-1 bg-yellow my-4' />
			<div>
				{deferredSearchValue.length === 0 ? (
					<p className='text-red text-center font-bold' style={{}}>
						Please enter a search term
					</p>
				) : filtered.length === 0 ? (
					<p className='text-red text-center font-bold' style={{}}>
						No results found
					</p>
				) : (
					filtered.map(entry => (
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: '6fr 6fr 1fr',
								gap: '1rem'
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
					))
				)}
			</div>
		</>
	);
}

export default memo(SearchPage);
