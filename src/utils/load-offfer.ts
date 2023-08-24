import { store } from '../store';
import { fetchComments } from '../store/thunks/comments';
import { getNearBy, getOffer } from '../store/thunks/offers';

const fetchOffer = async (id: string) => await store.dispatch(getOffer(id));
const fetchOfferExtra = async (id: string) =>
	await Promise.all([
		store.dispatch(getNearBy(id)),
		store.dispatch(fetchComments(id)),
	]);

export { fetchOffer, fetchOfferExtra };
