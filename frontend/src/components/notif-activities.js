import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { GeneralNotification, GeneralNotificationContent, AviNotification, AviImage, PrivateMessageNotification, AttachedImage, NameFormat, ReactedPostFormat, DateFormat, GroupFormat } from '../App-styles'

const baseUrl = 'http://localhost:3001/api/activities'

const HasReacted = ({ data }) => {
	return (
		<>
			<GeneralNotificationContent>
				<div>
					<NameFormat>{data.name}</NameFormat> reacted to your recent post <ReactedPostFormat>{data.target}</ReactedPostFormat>
				</div>
				<div><DateFormat>{data.time}</DateFormat></div>
			</GeneralNotificationContent>
		</>
	)
}
const HasFollowed = ({ data }) => {
	return (
		<>
			<GeneralNotificationContent>

				<div>
					<NameFormat>{data.name}</NameFormat> followed {data.target}
				</div>
				<div><DateFormat>{data.time}</DateFormat></div>
			</GeneralNotificationContent>

		</>
	)
}
const HasPrivateMessaged = ({ data }) => {
	return (
		<>
			<GeneralNotificationContent>
				<div>
					<NameFormat>{data.name}</NameFormat> sent {data.target} a private message
				</div>
				<div><DateFormat>{data.time}</DateFormat></div>
				<PrivateMessageNotification>
					{data.message}
				</PrivateMessageNotification>
			</GeneralNotificationContent>
		</>
	)
}
const HasLeft = ({ data }) => {
	return (
		<>
			<GeneralNotificationContent>
				<div>
					<NameFormat>{data.name}</NameFormat> left the group <GroupFormat>{data.target}</GroupFormat>
				</div>
				<div><DateFormat>{data.time}</DateFormat></div>
			</GeneralNotificationContent>
		</>
	)
}
const HasJoined = ({ data }) => {
	return (
		<>
			<GeneralNotificationContent>
				<div>
					<NameFormat>{data.name}</NameFormat> has joined your group <GroupFormat>{data.target}</GroupFormat>
				</div>
				<div><DateFormat>{data.time}</DateFormat></div>
			</GeneralNotificationContent>
		</>
	)

}
const HasCommented = ({ data }) => {
	return (
		<GeneralNotificationContent attachedimage>
			<div>
				<div>
					<NameFormat>{data.name}</NameFormat> commented on {data.target}
				</div>
				<div><DateFormat>{data.time}</DateFormat></div>
			</div>
			<AttachedImage>
				<AviImage src={data.img} alt=""></AviImage>
			</AttachedImage>
		</GeneralNotificationContent >
	)
}
export const clicked = (data, setReadStatus) => {
	if (data.read === false) {
		const updatedNotif = { ...data, read: true };
		axios.put(`${baseUrl}/${data.id}`, updatedNotif)
			.then(() => setReadStatus(true))
	}
	else
		return;
}

export const Reacted = ({ data, setRefresh, refresh }) => {
	const [readStatus, setReadStatus] = useState(data.read);
	console.log('read status', data.name, readStatus)
	console.log(data.read, 'in Reacted')

	useEffect(() => {
		setRefresh(refresh + 1);
	}, [readStatus])

	useEffect(() => {
		axios.get(`${baseUrl}/${data.id}`)
			.then(response => {
				// data = response.data;
				setReadStatus(data.read)
			})
	}, [refresh])

	const MyComponent = activitityType[data.activity]

	return (
		<GeneralNotification onClick={() => clicked(data, setReadStatus)} $read={readStatus}>
			<AviNotification>
				<AviImage src={data.avi} alt="profile" ></AviImage>
			</AviNotification>
			<MyComponent data={data} />
		</GeneralNotification>
	)
}

const activitityType = {
	LeftGroup: HasLeft,
	Reacted: HasReacted,
	Commented: HasCommented,
	PrivateMessage: HasPrivateMessaged,
	JoinedGroup: HasJoined,
	Followed: HasFollowed
}

export const MyRenderer = ({
	activitiesData, setRefresh, refresh }) => {
	console.log(refresh)
	console.log(activitiesData[0], 'in MyRenderer')


	return (
		<>
			{activitiesData.map(data => <Reacted data={data} key={data.notifid} setRefresh={setRefresh} refresh={refresh} />)}
		</>
	)
}
