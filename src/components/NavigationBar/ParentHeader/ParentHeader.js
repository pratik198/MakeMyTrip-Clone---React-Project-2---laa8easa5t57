import { useState } from 'react';
import Header2 from '../SecondaryNavigation/SecondaryNavigation.js';

const ParentHeader = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	window.onscroll = () => {
		const yaxis = window.scrollY;
		if (yaxis > 100) {
			setIsScrolled(true);
		} else if (yaxis <= 100) {
			setIsScrolled(false);
		}
	};

	return isScrolled && <Header2 />;
};

export default ParentHeader;