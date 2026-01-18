import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { BigSection, FullEntry } from '@/lib/types';
import { writeFile } from 'fs/promises';

const URLs = {
	Catted:
		'https://raw.githubusercontent.com/Transconlang/translang/refs/heads/main/rawspec/0-catted.json',
	Complete:
		'https://raw.githubusercontent.com/Transconlang/translang/refs/heads/main/rawspec/0-complete.json'
};

const Specs = {
	Catted: await fetch(URLs.Catted).then(
		res => res.json() as Promise<BigSection[]>
	),
	Complete: await fetch(URLs.Complete).then(
		res => res.json() as Promise<FullEntry[]>
	)
};

const DestDir = join(
	dirname(fileURLToPath(import.meta.url)),
	'..',
	'public',
	'langspec'
);

await writeFile(join(DestDir, 'catted.json'), JSON.stringify(Specs.Catted));
await writeFile(
	join(DestDir, 'complete.json'),
	JSON.stringify(
		Specs.Complete.sort((a, b) =>
			a.word.replaceAll('-', '').localeCompare(b.word.replaceAll('-', ''))
		)
	)
);
