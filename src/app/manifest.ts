import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Kumilinwa',
		short_name: 'Kumilinwa',
		description: 'The official Kumilinwa dictionary app!',
		start_url: '/',
		display_override: ['minimal-ui', 'standalone'],
		// ! colors
		background_color: '#',
		theme_color: '#',
		// todo generate icons #5
		icons: [
			{
				src: '/icons/192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: '/icons/512x512.png',
				sizes: '512x512',
				type: 'image/png'
			}
		]
	};
}
