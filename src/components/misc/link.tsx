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
		<a
			href={href}
			className={'underline hover: ' + className}
			target={external ? (target ?? '_blank') : undefined}
		>
			{children}
		</a>
	);
}
