import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app';
import { TemporalData } from './constants';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<App offersAmount={TemporalData.OfferAmount} />
	</React.StrictMode>
);
