import styled, { css } from 'styled-components';

// for Notification, NotifNumber and Mark all as read
export const HeaderNotification = styled.div`
	margin: 10px 30px ;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

// for the parent container of all notification (light blue)
export const MainNotificationBox = styled.div`
	margin: 48px auto 48px auto;
	border-radius: 18px;
	height: 900px;
	width: 730px;
	background-color: #ffffff;
`

// general settings for the container of each notifications; it contains three divs (or more), for example the AviNotification, GeneralNotificationContent, and sometimes PrivateMessageNotification & ImageNotification.
export const GeneralNotification = styled.div`
	background-color: #f6fafd;
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
// styling for each Name in notification
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
	color: #3d4d69;
	font-weight: 800;
`
