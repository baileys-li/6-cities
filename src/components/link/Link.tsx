import type { HTMLAttributes } from 'react';

import { Link as RouterLink } from 'react-router-dom';

type LinkProps = Pick<
	HTMLAttributes<HTMLAnchorElement>,
	'children' | 'className'
> & {
	href: string;
};

export function Link({ children, href, ...props }: LinkProps) {
	const isExternal = href.startsWith('http');
	const isAnchor = href.startsWith('#');

	if (isExternal) {
		return (
			<a href={href} rel="noopener noreferrer" target="_blank" {...props}>
				{children}
			</a>
		);
	}

	if (isAnchor) {
		return (
			<a href={href} {...props}>
				{children}
			</a>
		);
	}

	return (
		<RouterLink to={href} {...props}>
			{children}
		</RouterLink>
	);
}
