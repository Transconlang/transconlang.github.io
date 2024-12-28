import NextLink from 'next/link';

export default function Link({
	href,
	children,
	className,
	target,
	external
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
	target?: string;
	external?: boolean;
}) {
	return (
		<NextLink
			href={href}
			className={'underline hover: ' + className}
			target={external ? (target ?? '_blank') : undefined}
		>
			{children}
		</NextLink>
	);
}
