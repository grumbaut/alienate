import React from 'react';

const TimeInput = ({ label, onChange, id }) => (
	<label>
		{label}
		<input type='time' id={id} onChange={onChange} />
	</label>
);

export default TimeInput;
