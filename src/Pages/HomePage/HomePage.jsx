import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<>
			Home Page
			<br />
			<Link to='/chatPage'>Go to Chat page</Link>
			<br />
			<Link to='/UsersProfile/:userId'>Go to Users Profile page</Link>
		</>
	);
};
export default HomePage;
