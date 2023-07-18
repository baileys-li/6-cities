import { mockAuthStatus } from './auth';
import { mockAllOfferInfo } from './offer';


export const mockStore = {
	auth: mockAuthStatus(),
	offers: Array.from({ length: 50 }, mockAllOfferInfo)
};
