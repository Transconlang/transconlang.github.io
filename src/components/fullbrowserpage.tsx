'use client';

import { RootUrl } from '@/lib/constants';
import { BigSection, FullEntry } from '@/lib/types';
import { useState, useEffect } from 'react';
import { BookText } from 'lucide-react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from './ui/dialog';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

export default function FullBrowserPage() {
	const [cattedSpec, setCattedSpec] = useState<BigSection[]>([]);
	const [completeSpec, setCompleteSpec] = useState<FullEntry[]>([]);

	useEffect(() => {
		fetch(`${RootUrl}/langspec/catted.json`)
			.then(res => res.json())
			.then(v => setCattedSpec(v));
		fetch(`${RootUrl}/langspec/complete.json`)
			.then(res => res.json())
			.then(v => setCompleteSpec(v));
	}, []);

	return (
		<>
			{cattedSpec.length === 0 || completeSpec.length === 0 ? (
				<h2 className='text-xl text-center font-bold font-serif mb-2'>
					Loading...
				</h2>
			) : (
				<ScrollArea type='always'>
					{cattedSpec.map(bigsection => (
						<section key={bigsection.title}>
							<h2 className='text-xl text-center font-bold font-serif mb-2 sticky top-0 bg-blue z-10'>
								{bigsection.title}
							</h2>
							{bigsection.sections.map(subSection => (
								<section
									// intentional || over ??, the title might accidentally be an empty string
									key={subSection.title || bigsection.title}
									className='my-2'
								>
									{subSection.title ? (
										<h3 className='text-lg text-center font-bold font-serif mb-2 sticky top-6 bg-blue'>
											{subSection.title}
										</h3>
									) : (
										<></>
									)}
									{subSection.entries.map(entry => (
										<div
											style={{
												display: 'grid',
												gridTemplateColumns: '6fr 6fr 1fr',
												gap: '1rem'
											}}
											key={`${entry.word}`}
										>
											<p className='text-base font-bold font-serif mb-2'>
												{entry.word}
											</p>
											<p className='overflow-scroll'>{entry.meaning}</p>
											{entry.impl || entry.obscurism ? (
												<Dialog>
													<DialogTrigger asChild>
														<BookText />
													</DialogTrigger>
													<DialogContent>
														<DialogHeader>
															<DialogTitle>{entry.word}</DialogTitle>
															<DialogDescription>
																{entry.meaning}
															</DialogDescription>
														</DialogHeader>
														{entry.impl && <p>Implication: {entry.impl}</p>}
														{entry.obscurism && (
															<p>Obscurism: {entry.obscurism}</p>
														)}
													</DialogContent>
												</Dialog>
											) : (
												<p></p>
											)}
										</div>
									))}
								</section>
							))}
						</section>
					))}
					<ScrollBar className='z-20' />
				</ScrollArea>
			)}
		</>
	);
}
