import logo from './logo.svg';
import React from 'react'
import styled, { css } from 'styled-components';
import { useState, useEffect } from "react";
import axios from 'axios';
import { MyRenderer } from './components/notif-activities';
import './App.css';
import { HeaderNotification, MainNotificationBox, NameFormat, NotifHeader, NotifHeaderWrapper, NotifNumber } from './App-styles';

const baseUrl = 'http://localhost:3001/api/activities'

const MarkAllAsRead = ({ setRefresh, refresh }) => {
	const markAll = () => {
		return (axios.put('/api/activities/updateall')
			.then(() => setRefresh(refresh + 1))
		)
	}
	return (

		<MarkAllAsRead onClick={() => markAll()}>Mark all as read</MarkAllAsRead>
	)
}
// small function to count the amount of unread notificiation
const countUnread = ({ activitiesData }) => {

	let i = 0;
	activitiesData.forEach(element => {
		if (element.read === false)
			i++;
	});
	return i;
};

function App() {
	const [activitiesData, setActivitiesData] = useState([]);
	const [refresh, setRefresh] = useState(1);

	useEffect(() => {
		axios.get(baseUrl)
			.then(response => {
				console.log('promise fulfilled');
				return setActivitiesData(response.data);
			})
	}, [refresh])

	let len = countUnread({ activitiesData });
	console.log(refresh)

	return (
		<MainNotificationBox>
			<HeaderNotification>
				<NotifHeaderWrapper>
					<NotifHeader>Notifications</NotifHeader>
					<NotifNumber>{len}</NotifNumber>
				</NotifHeaderWrapper>
				<MarkAllAsRead setRefresh={setRefresh} refresh={refresh} />
			</HeaderNotification>

			<MyRenderer activitiesData={activitiesData} setRefresh={setRefresh} refresh={refresh} key={activitiesData.id} />
		</MainNotificationBox>
	);
}

export default App;
