import { memo } from 'react'

interface PriceProps {
	bemBlock: 'offer' | 'place-card'
	price: number
	showSlash?: boolean
}

function Price_({ bemBlock, price, showSlash = false }: PriceProps) {
	let text = ' night'
	if (showSlash) {
		text = `/${text}`
	}
	return (
		<div className={`${bemBlock}__price`}>
			<b className={`${bemBlock}__price-value`}>€{price}</b>
			<span className={`${bemBlock}__price-text`}>{text}</span>
		</div>
	)
}

export const Price = memo(Price_)
