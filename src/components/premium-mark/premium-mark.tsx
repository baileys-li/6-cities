interface PremiumMarkProps {
	bemBlock?: 'offer' | 'place-card';
}

export const PremiumMark = ({ bemBlock }: PremiumMarkProps) => (
	<div className={`${bemBlock}__mark`}>
		<span>Premium</span>
	</div>
);
