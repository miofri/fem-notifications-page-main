import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { GeneralNotification, GeneralNotificationContent, AviNotification, AviImage, PrivateMessageNotification, AttachedImage, NameFormat, ReactedPostFormat, DateFormat, GroupFormat } from '../App-styles'

const baseUrl = 'http://localhost:3001/api/activities'

const readStatus = (read) => {
	if (read === "true") {
		return true;
	}
	else
		return false;
}

const Clicked = (data, readBool) => {
	if (data.read === 'true') {
		return readBool
	}
	else {
		const updatedNotif = { ...data, read: 'true' }
		console.log('data', data)
		console.log('this is updated notif', updatedNotif)
		axios.put(`${baseUrl}/${data.id}`, updatedNotif)
		// window.location.reload(false);
		readBool = true
		return readBool
	}
}

export const Reacted = ({ name, target, time, avi, read, data }) => {
	console.log(read)
	let readBool = readStatus(read)
	const [t, setT] = useState(readBool)
	console.log(readBool)

	return (
		<GeneralNotification onClick={() => { Clicked(data, readBool); setT(true) }} $read={readBool}>
			<AviNotification>
				<AviImage src={avi} alt="profile" ></AviImage>
			</AviNotification>

			<GeneralNotificationContent>
				<div>
					<NameFormat>{name}</NameFormat> reacted to your recent post <ReactedPostFormat>{target}</ReactedPostFormat>
				</div>
				<div><DateFormat>{time}</DateFormat></div>
			</GeneralNotificationContent>
		</GeneralNotification>
	)
}

export const Followed = ({ data, name, target, time, avi, read }) => {
	let readBool = readStatus(read)

	return (
		<GeneralNotification onClick={() => Clicked(data, readBool)} $read={readBool}>
			<AviNotification>
				<AviImage src={avi} alt="profile"></AviImage>
			</AviNotification>

			<GeneralNotificationContent>
				<div>
					<NameFormat>{name}</NameFormat> followed {target}
				</div>
				<div><DateFormat>{time}</DateFormat></div>
			</GeneralNotificationContent>
		</GeneralNotification>
	)
}

export const PrivateMessage = ({ name, target, time, message, avi, read }) => {
	let readBool = readStatus(read);

	return (
		<GeneralNotification $read={readBool}>

			<AviNotification>
				<AviImage src={avi} alt="profile"></AviImage>
			</AviNotification>

			<GeneralNotificationContent>
				<div>
					<NameFormat>{name}</NameFormat> sent {target} a private message
				</div>
				<div><DateFormat>{time}</DateFormat></div>
				<PrivateMessageNotification>
					{message}
				</PrivateMessageNotification>
			</GeneralNotificationContent>

		</GeneralNotification>
	)
}

export const Commented = ({ name, target, time, img, avi, read }) => {
	let readBool = readStatus(read);

	return (
		<GeneralNotification $read={readBool}>

			<AviNotification>
				<AviImage src={avi} alt="profile"></AviImage>
			</AviNotification>

			<GeneralNotificationContent attachedimage>
				<div>
					<div>
						<NameFormat>{name}</NameFormat> commented on {target}
					</div>
					<div><DateFormat>{time}</DateFormat></div>
				</div>
				<AttachedImage>
					<AviImage src={img} alt=""></AviImage>
				</AttachedImage>
			</GeneralNotificationContent >

		</GeneralNotification>
	)
}

export const JoinedGroup = ({ name, target, time, avi, read }) => {
	let readBool = readStatus(read);

	return (
		<GeneralNotification $read={readBool}>
			<AviNotification>
				<AviImage src={avi} alt="profile"></AviImage>
			</AviNotification>

			<GeneralNotificationContent>
				<div>
					<NameFormat>{name}</NameFormat> has joined your group <GroupFormat>{target}</GroupFormat>
				</div>
				<div><DateFormat>{time}</DateFormat></div>
			</GeneralNotificationContent>
		</GeneralNotification>
	)
}

export const LeftGroup = ({ name, target, time, img, avi, read }) => {
	let readBool = readStatus(read);
	return (
		<GeneralNotification $read={readBool}>

			<AviNotification>
				<AviImage src={avi} alt="profile"></AviImage>
			</AviNotification>

			<GeneralNotificationContent>
				<div>
					<NameFormat>{name}</NameFormat> left the group <GroupFormat>{target}</GroupFormat>
				</div>
				<div><DateFormat>{time}</DateFormat></div>
			</GeneralNotificationContent>

		</GeneralNotification>
	)
}

const components = {
	LeftGroup: LeftGroup,
	Reacted: Reacted,
	Commented: Commented,
	PrivateMessage: PrivateMessage,
	JoinedGroup: JoinedGroup,
	Followed: Followed
}

export const NotificationList = ({ data, rerender }) => {
	let MyComponent = components[data.activity]

	return (
		<>
			<MyComponent data={data} name={data.name} target={data.target} time={data.time} message={data.message} img={data.img} avi={data.avi} read={data.read} />
		</>
	)
}

export const MyRenderer = ({
	activitiesData, rerender }) => {

	return (
		<>
			{activitiesData.map(data => <NotificationList data={data} key={data.notifid} />)}
		</>
	)
}

/*
<MyRenderer>
	<NotificationList>
		<MyComponent e.g.Reacted></MyComponent>
		<MyComponent e.g.LeftGroup></MyComponent>
		<MyComponent e.g.Followed></MyComponent>
	</NotificationList>
	...
</MyRenderer>
*/
