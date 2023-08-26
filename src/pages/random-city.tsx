import { Navigate } from 'react-router-dom';

import { randomCity } from '../utils/city';

export const RandomCityRoute = () => <Navigate to={`/${randomCity().id}`} />;
