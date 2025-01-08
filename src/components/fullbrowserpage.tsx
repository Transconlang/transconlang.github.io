'use client';

import { RootUrl } from '@/lib/constants';
import { BigSection } from '@/lib/types';
import { useState, useEffect } from 'react';
import { BookText } from 'lucide-react';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from './ui/dialog';
import { DialogDescription } from '@radix-ui/react-dialog';

export default function FullBrowserPage() {
	const [fullSpec, setFullSpec] = useState<BigSection[]>([]);
	// todo add tabs for alphabetized/categorizedsw

	useEffect(() => {
		fetch(`${RootUrl}/langspec/catted.json`)
			.then(res => res.json())
			.then(v => setFullSpec(v));
	}, []);

	return (
		<>
			{fullSpec.length === 0 ? (
				<h2 className='text-xl text-center font-bold font-serif mb-2'>
					Loading...
				</h2>
			) : (
				fullSpec.map(bigsection => (
					<section key={bigsection.title}>
						<h2 className='text-xl text-center font-bold font-serif mb-2'>
							{bigsection.title}
						</h2>
						{bigsection.sections.map(subSection => (
							// intentional || over ??, the title might accidentally be an empty string
							<section
								key={subSection.title || bigsection.title}
								className='my-2'
							>
								{subSection.title ? (
									<h3 className='text-lg text-center font-bold font-serif mb-2'>
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
										key={entry.word}
									>
										<h4 className='text-base font-bold font-serif mb-2'>
											{entry.word}
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
				))
			)}
		</>
	);
}
