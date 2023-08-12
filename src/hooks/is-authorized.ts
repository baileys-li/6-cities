import { AuthorizationStatus } from '../constants';
import { useAppSelector } from './store';

export function useAuth() {
	const status = useAppSelector((state) => state.user.status);
	return status === AuthorizationStatus.Auth;
}

