import withSerwistInit from '@serwist/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	output: 'export',
	images: {
		unoptimized: true
	}
};

export default withSerwistInit({
	cacheOnNavigation: true,
	swSrc: 'src/app/sw.ts',
	swDest: 'public/sw.js',
	include: [/\.(css|js|ts|jsx|tsx|html|png|svg|jpg|jpeg|webp|json)/]
})(nextConfig);
