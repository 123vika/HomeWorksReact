import { Link } from 'react-router-dom';

const FrontPage = () => {
	return (
		<>
			<Link to='/homePage'>Go to Home page</Link>
			<br />
			<Link to='/chatPage'>Go to Chat page</Link>
			<br />
			<br />
			<Link to='/newMessage'>Go to new message button</Link>
		</>
	);
};
export default FrontPage;
