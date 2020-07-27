import React from 'react';
import alien from '../../../assets/alien.png';
import star from '../../../assets/star.png';

const Alien = ({ shrink = false }) => {
	const [shrunk, setShrunk] = React.useState(shrink);
	React.useEffect(() => setShrunk(shrink), [shrink]);
	
	return (
		<div className='alien'>
			<img src={star} className={`left-star ${shrunk ? 'shrunk' : null}`} />
			<img src={alien} className={`alien-img ${shrunk ? 'shrunk' : null}`} />
			<img src={star} className={`right-star ${shrunk ? 'shrunk' : null}`} />
		</div>
	)
};

export default Alien;
