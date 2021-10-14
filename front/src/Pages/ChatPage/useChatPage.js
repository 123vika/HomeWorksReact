import { useDispatch, useSelector } from 'react-redux';
import { addChatList, deleteChat } from '../../actions/chatPageAction.jsx';
import { useEffect } from 'react';

const useChatPage = () => {
	const dispatch = useDispatch();
	const storeChatList = useSelector((state) => state.chatPageReducer);
	console.log(storeChatList, 'storeChatList');
	const chatList = [
		{ id: Date.now() + 1, name: 'Vasyly' },
		{ id: Date.now() + 2, name: 'Elena' },
		{ id: Date.now() + 3, name: 'Ivan' },
	];

	useEffect(() => {
		dispatch(addChatList(chatList));
	}, []);

	const deleteChatHandler = (chatId) => {
		dispatch(deleteChat(chatId));
	};

	return [storeChatList, deleteChatHandler];
};

export default useChatPage;
