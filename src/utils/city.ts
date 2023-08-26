import { CITIES } from '../constants';
import { randomElement } from './random';

export const randomCity = () => randomElement(CITIES);
