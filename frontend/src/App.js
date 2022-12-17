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
	const markAll = async () => {
		await axios.put('/api/activities/updateall');
		setRefresh(refresh + 1)
	}

	return (
		<div onClick={() => markAll()}>Mark all as read</div>
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
				console.log('promise fulfilled', response.data[0]);
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
				<MarkAllAsRead data={activitiesData} setActivitiesData={setActivitiesData} setRefresh={setRefresh} refresh={refresh} />
			</HeaderNotification>

			<MyRenderer activitiesData={activitiesData} setRefresh={setRefresh} refresh={refresh} key={activitiesData.id} />
		</MainNotificationBox>
	);
}

export default App;
