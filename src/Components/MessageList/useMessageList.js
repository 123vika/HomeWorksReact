import { useDispatch, useSelector } from 'react-redux';
import { deleteMessageList } from '../../actions/messageListAction';

const useMessageList = () => {
	const dispatch = useDispatch();
	const msgList = useSelector((state) => state.messageListReducer.msg);
	console.log(msgList, 'msgList');
	const deleteMsgHandler = (userId) => {
		dispatch(deleteMessageList(userId));
	};
	return [msgList, deleteMsgHandler];
};
export default useMessageList;
