'use client';

import { RootUrl } from '@/lib/constants';
import { BigSection } from '@/lib/types';
import { useState, useEffect } from 'react';

export default function FullBrowserPage() {
	const [fullSpec, setFullSpec] = useState<BigSection[]>([]);

	useEffect(() => {
		fetch(`${RootUrl}/langspec/catted.json`)
			.then(res => res.json())
			.then(v => setFullSpec(v));
	}, []);

	return (
		<>
			{fullSpec.map(bigsection => (
				<section key={bigsection.title}>
					<h2 className='text-xl font-bold font-serif mb-2'>
						{bigsection.title}
					</h2>
					{bigsection.sections.map(subSection => (
						// intentional || over ??, the title might accidentally be an empty string
						<section key={subSection.title || bigsection.title}>
							<h3 className='text-lg font-bold font-serif mb-2'>
								{subSection.title}
							</h3>
							{subSection.entries.map(entry => (
								<div
									style={{
										display: 'grid',
										gridTemplateColumns: '2fr 4fr 4fr 1fr',
										gap: '1rem'
									}}
									key={entry.word}
								>
									<h4 className='text-base font-bold font-serif mb-2'>
										{entry.word}
									</h4>
									<p>{entry.meaning}</p>
									<p>{entry.impl}</p>
									<p>{entry.obscurism}</p>
								</div>
							))}
						</section>
					))}
				</section>
			))}
		</>
	);
}
