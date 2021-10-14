import {
	ADD_MESSAGE,
	DELETE_MESSAGE,
} from '../store/types/messageListTypes.jsx';

export const addMessageList = (userMessage) => ({
	type: ADD_MESSAGE,
	payload: userMessage,
});
export const deleteMessageList = (userId) => ({
	type: DELETE_MESSAGE,
	payload: { id: userId },
});

export const robotAnswer = (userMessage) => (dispatch) => {
	console.log(userMessage, 'robotAnswer');
	const user = userMessage.author;

	setTimeout(() => {
		alert(`Hello ${user}`);
	}, 500);

	// alert(`Hello ${user}`);
	dispatch(addMessageList(userMessage));
};
