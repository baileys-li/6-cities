import { store } from '../store';
import { fetchComments } from '../store/thunks/comments';
import { getNearBy, getOffer } from '../store/thunks/offers';

export const prefetchOffer = async (id: string) => await store.dispatch(getOffer(id));

export const fetchOfferPageData = async (id: string) =>
	await Promise.all([
		prefetchOffer(id),
		store.dispatch(getNearBy(id)),
		store.dispatch(fetchComments(id)),
	]);
