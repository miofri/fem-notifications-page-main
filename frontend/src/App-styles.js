import styled, { css } from 'styled-components';

/* Notification's Header */

// parent of "Notifications", NotifNumber and Mark all as read
export const HeaderNotification = styled.div`
	margin: 10px 30px ;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-top: 20px;
	padding-bottom: 20px;
`
// for the div containing "Notifications"
export const NotifHeader = styled.div`
	font-weight: 800;
	font-size: 24px;
	margin-right: 12px;
`
// for the div containing number of notifications next to "Notifications"
export const NotifNumber = styled(NotifHeader)`
	width: 32px;
	background-color: #063578;
	color: #ffff;
	text-align: center;
	font-size: 16px;
	padding-top: 4px;
	border-radius: 15%;
`
// parent of "Notifications"/NotifHeader & NotifNumber
export const NotifHeaderWrapper = styled.div`
	display: flex;
	flex-direction: row;
`

export const MarkAllNotifsAsRead = styled.div`
	color: black;
	/* &:hover {
		transform: scale(1.1);
	} */
`

/* Actual Notifications */

// for the parent container of all notification (light blue when unread)
export const MainNotificationBox = styled.div`
	margin: 48px auto 48px auto;
	border-radius: 18px;
	height: fit-content;
	width: 730px;
	background-color: #ffffff;
`

// general settings for the container of each notifications; it contains three divs (or more), for example the AviNotification, GeneralNotificationContent, and sometimes PrivateMessageNotification & ImageNotification.
export const GeneralNotification = styled.div`
	background-color: ${props => props.$read ? "#ffffff" : "#f6fafd"};
	margin: 10px 30px ;
	border-radius: 18px;
	display: flex;

`

// the div that contains the name & time. Might also contain PrivateMessageNotification and associated image, depending on the activity.
export const GeneralNotificationContent = styled.div`
	margin: 18px 18px 18px 0px;
	display:  ${props => props.attachedimage ? "flex" : "block"};
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	width: 580px;
`

// display picture of each user.
export const AviImage = styled.img`
	max-width: 100%;
`

// the container of AviImage
export const AviNotification = styled.div`
	width: 50px;
	margin: 18px;
`

// images attached to a post; e.g. in a commented post
export const AttachedImage = styled.div`
	height: fit-content;
	width: 50px;
	float: right;
	margin-right: 24px;
`

// container of private message
export const PrivateMessageNotification = styled.div`
	margin-top: 12px;
	padding: 16px;
	color: #292d30;
	width: 518px;
	border: solid;
	border-color: hsl(205, 33%, 90%);
	border-width: 1px;
`



/* styling for each differently-highligted texts in notifications, for example, names have to be bolded, posts have to have grey color, etc. */

export const NameFormat = styled.span`
	font-weight: 800;
	color: #2b2f32;
`
export const ReactedPostFormat = styled.span`
	font-weight: 800;
	color: #70757d;
`
export const DateFormat = styled.span`
	color: #bdc0c7;
`
export const GroupFormat = styled.span`
	color:hsl(219, 85%, 26%);
	font-weight: 800;
`
