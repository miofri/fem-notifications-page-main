import logo from './logo.svg';
import React from 'react'
import styled, { css } from 'styled-components';
import { useState, useEffect } from "react";
import axios from 'axios';
import { MyRenderer } from './components/notif-activities';
import './App.css';
import { MainNotificationBox } from './App-styles';



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

	return (
		<MainNotificationBox>
			<MyRenderer activitiesData={activitiesData} />
		</MainNotificationBox>
	);
}

export default App;
