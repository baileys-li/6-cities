import { store } from '../../store';
import { getAllOffers } from '../../store/slices/offers';

export const loadMainPageData = () => store.dispatch(getAllOffers());
