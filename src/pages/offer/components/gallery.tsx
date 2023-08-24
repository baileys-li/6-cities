import type { FullOffer } from '../../../types/offer';

type GalleryProps = Partial<Pick<FullOffer, 'images' | 'title'>>;

const enum Default {
	Max = 6,
}


export const Gallery = ({
	images = [],
	title,
}: GalleryProps) => (
	<div className="offer__gallery-container container">
		<div className="offer__gallery">
			{images.slice(0, Default.Max).map((image) => (
				<div className="offer__image-wrapper" key={image}>
					<img alt={title} className="offer__image" src={image} />
				</div>
			))}
		</div>
	</div>
);
