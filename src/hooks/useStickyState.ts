import { Dispatch, SetStateAction, useEffect, useState } from 'react';

/**
 * @function useStickyState Persist state in local storage
 * @param {string} defaultValue The default value to use if no value is found in local storage
 * @param {string} key The key to use when storing the value in local storage
 * @returns An array containing the value and a function to update the value
 */
export function useStickyState<T>(defaultValue: string, key: string) {
	const [value, setValue] = useState(() => {
		const stickyValue = window.localStorage.getItem(key);

		return stickyValue !== null
			? (JSON.parse(stickyValue) as T)
			: (defaultValue as T);
	});

	useEffect(
		() => window.localStorage.setItem(key, JSON.stringify(value)),
		[key, value]
	);

	return [value, setValue] as [T, Dispatch<SetStateAction<T>>];
}
