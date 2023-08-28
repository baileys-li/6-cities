import { useEffect } from 'react';

import { APP_NAME } from '../constants';

export function useDocumentTitle(title: string) {
	useEffect(() => {
		const initialTitle = document.title;
		return () => {
			document.title = initialTitle;
		};
	}, []);

	useEffect(() => {
		document.title = `${title} | ${APP_NAME}`;
	}, [title]);
}
