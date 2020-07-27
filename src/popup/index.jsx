import React from 'react';
import ReactDOM from 'react-dom';
import Alien from '../components/Alien';
import TimeInput from '../components/TimeInput';
import '../styles/popup.css';

const PopupMenu = () => {
	const [screen, setScreen] = React.useState('intro');
	const [startTime, setStartTime] = React.useState(null);
	const [endTime, setEndTime] = React.useState(null);
	const onChange = (event) => {
		switch (event.target.id) {
			case 'start':
				return React.setStartTime(event.target.value);
			case 'end':
				return React.setEndTime(event.target.value);
			default:
		}
	};
	
	return (
		<>
			<Alien shrink={false} />
			<p className='intro-text'>Hello, human! We've come to alienate you from social media!</p>
			<button className='next'>NEXT</button>
		</>
	)
};

ReactDOM.render(
	<PopupMenu />,
	document.getElementById('root'),
);
