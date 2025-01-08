export function trimWordType(type: string) {
	switch (type.toLowerCase()) {
		case 'adjective':
			return 'adj';
		case 'adverb':
			return 'adv';
		case 'conjunction':
			return 'conj';
		case 'interjection':
			return 'interj';
		case 'noun':
			return 'n';
		case 'number':
			return 'num';
		case 'prefix':
			return 'pref';
		case 'preposition':
			return 'prep';
		case 'pronoun':
			return 'pron';
		case 'suffix':
			return 'suff';
		case 'verb':
			return 'v';
		default:
			return type;
	}
}
