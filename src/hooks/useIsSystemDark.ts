/**
 * @function useIsSystemDark Check if the system theme is dark
 * @param {Function | undefined} onChange Callback function to run when the system theme changes
 * @returns {Object} Theme data
 */
export function useIsSystemDark(
	onChange?: (event: MediaQueryListEvent) => any
) {
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	onChange && mediaQuery.addEventListener('change', onChange);
	return { systemThemeDark: mediaQuery.matches };
}

/**
 * @function useIsClassDark Check if the document's class theme is dark
 * @returns {Boolean} True if the class theme is dark
 */
export function useIsClassDark() {
	return document.documentElement.classList.contains('dark');
}
