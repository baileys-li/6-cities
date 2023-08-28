import { selectIsAuth } from '../store/selectors/user';
import { useAppSelector } from './store';

export const useAuth = () => useAppSelector(selectIsAuth);
