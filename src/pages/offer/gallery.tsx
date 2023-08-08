import type { FullOffer } from '../../types/offer';

type GalleryProps = Pick<FullOffer, 'images' | 'title'>;

export const Gallery = ({ images, title }: GalleryProps) => (
	<div className="offer__gallery-container container">
		<div className="offer__gallery">
			{images.map((image) => (
				<div className="offer__image-wrapper" key={image}>
					<img alt={title} className="offer__image" src={image} />
				</div>
			))}
		</div>
	</div>
);
