import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userProfileLogin } from '../../actions/usersProfileActions';

const UsersProfilePage = () => {
	const { userId } = useParams();
	let checkedLogin;
	const dispatch = useDispatch();

	const usersdata = useSelector((state) => state.users);
	console.log(usersdata, 'userLogin11');

	// const user = usersdata.find((user) => user.id === userId);
	// console.log(user?.checked, 'userLogin12');

	const changeLoginHandler = (event) => {
		event.target.checked ? (checkedLogin = true) : (checkedLogin = false);
		dispatch(userProfileLogin(userId, checkedLogin));
		console.log(event.target.checked, 'changed');
	};
	return (
		<>
			<p>Users Profile {userId}</p>
			<div>
				<label>
					User's profile login
					<input type='checkbox' onChange={changeLoginHandler} />
					{/* {user?.checked && <p>User login: true </p>} */}
				</label>
			</div>
		</>
	);
};

export default UsersProfilePage;
