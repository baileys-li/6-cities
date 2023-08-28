import { useParams } from 'react-router-dom';

export function useOfferId() {
	const { id } = useParams() as { id: string };
	return id;
}
