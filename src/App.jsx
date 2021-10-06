import { Button, Grid, Paper } from '@material-ui/core';
import { useState } from 'react'; //, useEffect, useCallback
import { useStyles } from './appStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatPage from './Pages/ChatPage/ChatPage';
import MessageForm from './Components/MessageForm/MessageForm';
import MessageList from './Components/MessageList/MessageList';
import HomePage from './Pages/HomePage/HomePage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import UsersProfilePage from './Pages/UsersProfilePage/UsersProfilePage';
import FrontPage from './Pages/FrontPage/FrontPage';

function App() {
	const classes = useStyles();

	const [messageList, setMessageList] = useState([]);

	let [newMsg, setNewMsg] = useState(false);
	const addNewMsg = () => {
		setNewMsg((newMsg) => !newMsg);
	};

	return (
		// header  new component

		<Grid className={classes.root}>
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
					<Route component={ErrorPage} />
				</Switch>
			</Router>
		</Grid>
	);
}

export default App;
