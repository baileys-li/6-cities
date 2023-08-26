import { Link } from '../../../components/link/link';
import { CITIES } from '../../../constants';
import { randomElement } from '../../../utils/random';

export function RandomCity() {
	const { id, name } = randomElement(CITIES);
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
