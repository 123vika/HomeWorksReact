import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setImageUrl } from '../../actions/homePageAction';
import ErrorPage from '../ErrorPage/ErrorPage';

const HomePage = () => {
	const dispatch = useDispatch();

	const imageUrl = useSelector((state) => state.homePageReducer);
	console.log(imageUrl, 'imageUrl homePage');
	useEffect(() => {
		dispatch(setImageUrl());
	}, []);

	const tryAgainHandler = () => {
		dispatch(setImageUrl());
	};

	return (
		<>
			<h1>Home Page</h1>
			<h2>Best dog of the day</h2>
			{imageUrl === 'error' ? <ErrorPage /> : <img src={imageUrl} alt='dog' />}
			<br />
			<button onClick={tryAgainHandler}>Try Again</button>
			<br />
			<Link to='/chatPage'>Go to Chat page</Link>
			<br />
			<Link to='/UsersProfile/:userId'>Go to Users Profile page</Link>
		</>
	);
};
export default HomePage;
