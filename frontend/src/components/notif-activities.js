import React from 'react'
import { GeneralNotification, GeneralNotificationContent, AviNotification, AviImage, PrivateMessageNotification } from '../App-styles'


export const Reacted = ({ name, target, time, avi }) => {
	return (
		<GeneralNotification>
			<AviNotification>
				<AviImage src={avi} alt="profile" ></AviImage>
			</AviNotification>
			<GeneralNotificationContent>
				<div>{name} reacted to your recent post {target}</div>
				<div>{time}</div>
			</GeneralNotificationContent>
		</GeneralNotification>
	)
}

export const Followed = ({ name, target, time, avi }) => {
	return (
		<GeneralNotification>
			<AviNotification>
				<AviImage src={avi} alt="profile"></AviImage>
			</AviNotification>
			<GeneralNotificationContent>
				<div>{name} followed {target}</div>
				<div>{time}</div>
			</GeneralNotificationContent>
		</GeneralNotification>
	)
}

export const JoinedGroup = ({ name, target, time, avi }) => {
	return (
		<GeneralNotification>
			<AviNotification>
				<AviImage src={avi} alt="profile"></AviImage>
			</AviNotification>
			<GeneralNotificationContent>
				<div>{name} has joined your group {target}</div>
				<div>{time}</div>
			</GeneralNotificationContent>
		</GeneralNotification>
	)
}

export const PrivateMessage = ({ name, target, time, message, avi }) => {
	return (
		<GeneralNotification>
			<AviNotification>
				<AviImage src={avi} alt="profile"></AviImage>
			</AviNotification>
			<GeneralNotificationContent>
				<div>{name} sent {target} a private message</div>
				<div>{time}</div>
				<PrivateMessageNotification>{message}</PrivateMessageNotification>
			</GeneralNotificationContent>
		</GeneralNotification>
	)
}

export const Commented = ({ name, target, time, img, avi }) => {
	return (
		<GeneralNotification>
			<AviNotification>
				<AviImage src={avi} alt="profile"></AviImage>
			</AviNotification>
			<GeneralNotificationContent>
				<div>{name} commented on {target}</div>
				<div>{time}</div>
				<div><img src={img} alt=""></img></div>
			</GeneralNotificationContent >
		</GeneralNotification>
	)
}

export const LeftGroup = ({ name, target, time, img, avi }) => {
	return (
		<GeneralNotification>
			<AviNotification>
				<AviImage src={avi} alt="profile"></AviImage>
			</AviNotification>
			<GeneralNotificationContent>
				<div>{name} left the group {target}</div>
				<div>{time}</div>
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

export const NotificationList = ({ data }) => {
	let MyComponent = components[data.activity]

	return (
		<div>
			<MyComponent name={data.name} target={data.target} time={data.time} message={data.message} img={data.img} avi={data.avi} />
		</div>
	)
}

export const MyRenderer = ({
	activitiesData }) => {

	return (
		<>
			{activitiesData.map(data => <NotificationList data={data} key={data.notifid} />)}
		</>
	)
}
