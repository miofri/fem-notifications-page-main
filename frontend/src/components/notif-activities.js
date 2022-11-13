import React from 'react'


export const Reacted = ({ name, target, time, avi }) => {
	return (
		<div>
			<div><img src={avi} alt="profile"></img></div>
			<div>
				<div>{name} reacted to your recent post {target}</div>
				<div>{time}</div>
			</div>
		</div>
	)
}

export const Followed = ({ name, target, time, avi }) => {
	return (
		<div>
			<div><img src={avi} alt="profile"></img></div>
			<div>
				<div>{name} followed {target}</div>
				<div>{time}</div>
			</div>
		</div>
	)
}

export const JoinedGroup = ({ name, target, time, avi }) => {
	return (
		<div>
			<div><img src={avi} alt="profile"></img></div>
			<div>
				<div>{name} has joined your group {target}</div>
				<div>{time}</div>
			</div>
		</div>
	)
}

export const PrivateMessage = ({ name, target, time, message, avi }) => {
	return (
		<div>
			<div><img src={avi} alt="profile"></img></div>
			<div>
				<div>{name} sent {target} a private message</div>
				<div>{time}</div>
				<div>{message}</div>
			</div>
		</div>
	)
}

export const Commented = ({ name, target, time, img, avi }) => {
	return (
		<div>
			<div><img src={avi} alt="profile"></img></div>
			<div>
				<div>{name} commented on {target}</div>
				<div>{time}</div>
				<div><img src={img} alt=""></img></div>
			</div >
		</div>
	)
}

export const LeftGroup = ({ name, target, time, img, avi }) => {
	return (
		<div>
			<div><img src={avi} alt="profile"></img></div>
			<div>
				<div>{name} left the group {target}</div>
				<div>{time}</div>
			</div>
		</div>
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
		<div>
			{activitiesData.map(data => <NotificationList data={data} key={data.notifid} />)}
		</div>
	)
}
