import type { MouseEvent } from 'react';

import { useActionCreators } from '../../../../hooks';
import { userActions } from '../../../../store/slices/user';

export function useHandleLogout() {
	const { logout } = useActionCreators(userActions);
	return function handleLogout(event: MouseEvent<HTMLAnchorElement>) {
		event.preventDefault();
		logout();
	};
}
