import { memo } from 'react'

import type { FullOffer } from '../../../types/offer'

type GoodsProps = Pick<FullOffer, 'goods'>

const Goods_ = ({ goods }: GoodsProps) => (
	<div className="offer__inside">
		<h2 className="offer__inside-title">What&apos;s inside</h2>
		<ul className="offer__inside-list">
			{goods.map(good => (
				<li className="offer__inside-item" key={good}>
					{good}
				</li>
			))}
		</ul>
	</div>
)

export const Goods = memo(Goods_)
