import logo from './logo.svg';
import React from 'react'
import styled, { css } from 'styled-components';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Test, Reacted, Followed, JoinedGroup, PrivateMessage, Commented, LeftGroup, MyRenderer } from './components/notif-activities';
import './App.css';



function App() {
	const [activitiesData, setActivitiesData] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3001/api/activities')
			.then(response => {
				console.log('promise fulfilled');
				setActivitiesData(response.data);
			})
	}, [])

	console.log(activitiesData);

	// const MyRenderer = ({ activitiesData }) => {
	// 	const Activity = activitiesData[3].activity
	// 	return (
	// 		<>
	// 			{Activity}
	// 		</>
	// 	)
	// }

	return (
		<div>
			<MyRenderer activitiesData={activitiesData} />
		</div>
	);
}

export default App;
