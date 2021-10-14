import { useDispatch } from 'react-redux';
import { robotAnswer } from '../../actions/messageListAction.jsx';

const useMesageForm = () => {
	const dispatch = useDispatch();

	const addMessage = (message) => {
		dispatch(robotAnswer(message));
	};

	return addMessage;
};

export default useMesageForm;
