import { store } from '../../store';
import { getAllOffers } from '../../store/thunks/offers';

export const loadMainPageData = () => store.dispatch(getAllOffers());
