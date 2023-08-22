import { Link } from '../../../components/link/link';
import { CITIES } from '../../../constants';
import { getRandomElement } from '../../../utils/random';

export function RandomCity() {
	const { id, name } = getRandomElement(CITIES);
	return (
		<section className="locations locations--login locations--current">
			<div className="locations__item">
				<Link className="locations__item-link" href={`/${id}`}>
					<span>{name}</span>
				</Link>
			</div>
		</section>
	);
}
