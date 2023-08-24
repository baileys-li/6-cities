import { memo } from 'react';

interface PremiumMarkProps {
	bemBlock?: 'offer' | 'place-card';
}

const PremiumMark_ = ({ bemBlock }: PremiumMarkProps) => (
	<div className={`${bemBlock}__mark`}>
		<span>Premium</span>
	</div>
);

export const PremiumMark = memo(PremiumMark_);
