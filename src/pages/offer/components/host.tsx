import { clsx } from 'clsx';

import type { FullOffer } from '../../../types/offer';

type HostProps = Pick<FullOffer, 'description' | 'host'>;

export const Host = ({ description, host }: HostProps) => (
	<div className="offer__host">
		<h2 className="offer__host-title">Meet the host</h2>
		<div className="offer__host-user user">
			<div
				className={clsx(
					'offer__avatar-wrapper',
					{
						'offer__avatar-wrapper--pro': host.isPro,
					},
					'user__avatar-wrapper'
				)}
			>
				<img
					alt="Host avatar"
					className="offer__avatar user__avatar"
					height={74}
					src={host.avatarUrl}
					width={74}
				/>
			</div>
			<span className="offer__user-name">{host.name}</span>
			{host.isPro && <span className="offer__user-status">Pro</span>}
		</div>
		<div className="offer__description">
			<p className="offer__text">{description}</p>
		</div>
	</div>
);
