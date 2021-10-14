import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userProfileLogin } from '../../actions/usersProfileActions';

const useUserProfilePage = () => {
	const { userId } = useParams();
	const dispatch = useDispatch();

	let checkedLogin;
	const usersdata = useSelector((state) => state.users);
	console.log(usersdata, 'userLogin11');

	// const user = usersdata.find((user) => user.id === userId);
	// console.log(user?.checked, 'userLogin12');

	const changeLoginHandler = (event) => {
		event.target.checked ? (checkedLogin = true) : (checkedLogin = false);
		dispatch(userProfileLogin(userId, checkedLogin));
		console.log(event.target.checked, 'changed');
	};

	return [userId, changeLoginHandler];
};

export default useUserProfilePage;
