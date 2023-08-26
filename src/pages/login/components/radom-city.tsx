import { Link } from '../../../components/link/link';
import { randomCity } from '../../../utils/city';

export function RandomCity() {
	const { id, name } = randomCity();
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
