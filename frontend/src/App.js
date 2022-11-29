import logo from './logo.svg';
import React from 'react'
import styled, { css } from 'styled-components';
import { useState, useEffect } from "react";
import axios from 'axios';
import { MyRenderer } from './components/notif-activities';
import './App.css';
import { HeaderNotification, MainNotificationBox, NameFormat, NotifHeader, NotifHeaderWrapper, NotifNumber } from './App-styles';

const baseUrl = 'http://localhost:3001/api/activities'

// small function to count the amount of unread notificiation
const countUnread = ({ activitiesData }) => {
	let i = 0;
	activitiesData.forEach(element => {
		if (element.read === "false")
			i++;
	});
	return i;
};

const MarkAllAsRead = () => {
	return (
		<div>Mark all as read</div>
	)
}

function App() {
	const [activitiesData, setActivitiesData] = useState([]);

	useEffect(() => {
		axios.get(baseUrl)
			.then(response => {
				console.log('promise fulfilled');
				setActivitiesData(response.data);
			})
	}, [])

	console.log(typeof activitiesData);

	let len = countUnread({ activitiesData });

	return (
		<MainNotificationBox>
			<HeaderNotification>
				<NotifHeaderWrapper>
					<NotifHeader>Notifications</NotifHeader>
					<NotifNumber>{len}</NotifNumber>
				</NotifHeaderWrapper>
				<MarkAllAsRead />
			</HeaderNotification>

			<MyRenderer activitiesData={activitiesData} />
		</MainNotificationBox>
	);
}

export default App;
