import { Button, Paper, Grid } from '@material-ui/core';
import { useStyles } from './routerPageStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react'; //, useEffect, useCallback
import ChatPage from '../ChatPage/ChatPage';
import MessageForm from '../../Components/MessageForm/MessageForm';
import MessageList from '../../Components/MessageList/MessageList';
import HomePage from '../HomePage/HomePage';
import ErrorPage from '../ErrorPage/ErrorPage';
import UsersProfilePage from '../UsersProfilePage/UsersProfilePage';
import FrontPage from '../FrontPage/FrontPage';

const RouterPage = () => {
	const classes = useStyles();
	const [messageList, setMessageList] = useState([]);

	let [newMsg, setNewMsg] = useState(false);
	const addNewMsg = () => {
		setNewMsg((newMsg) => !newMsg);
	};
	return (
		<Router>
			<Switch>
				<Route exact path='/newMessage'>
					<Grid container spacing={3} item xs={6}>
						<div>
							<Button className={classes.root_appButton} onClick={addNewMsg}>
								New Message
							</Button>
						</div>
						<div>{newMsg ? <MessageForm /> : null}</div>
						{newMsg ? <MessageList propsList={messageList} /> : null}
					</Grid>
				</Route>
				<Route exact path='/chatPage'>
					<Grid>
						<Paper className={classes.paper}>
							<ChatPage spacing={1} item />
						</Paper>
					</Grid>
				</Route>
				<Route exact path='/' component={FrontPage} />

				<Route exact path='/UsersProfile/:userId'>
					<UsersProfilePage />
				</Route>
				<Route exact path='/homePage'>
					<HomePage />
				</Route>
				{/* <Route component={ErrorPage} /> */}
			</Switch>
		</Router>
	);
};
export default RouterPage;
