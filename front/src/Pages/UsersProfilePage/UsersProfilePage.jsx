import useUserProfilePage from './useUserProfilePage';

const UsersProfilePage = () => {
	const [userId, changeLoginHandler] = useUserProfilePage();

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
