import React, { useState } from 'react';
import moment from 'moment';
import { Header } from '../Header/Header';
import { Calendar } from '../Calendar/Calendar';

function App() {
	window.moment = moment();
	// const today = moment();
	const [today, setToday] = useState(moment());
  	const startDay = today.clone().startOf('month').startOf('week');

	const prevHandler = () => {
		console.log('prev')
		setToday(prev => prev.clone().subtract(1, 'month'))
	}
	const nextHandler = () => {
		console.log('next')
		setToday(prev => prev.clone().add(1, 'month'))
	};
  	return (
			<div>
				<Header
					today={today}
					prevHandler={prevHandler}
					nextHandler={nextHandler}
				/>
				<Calendar startDay={startDay} today={today} />
			</div>
		);
}

export default App;
