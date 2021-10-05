import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './chatPageStyle.jsx';
import useChatPage from './useChatPage.js';

const ChatPage = () => {
	const classes = useStyles();
	const history = useHistory();

	const [storeChatList, deleteChatHandler] = useChatPage();
	return (
		<List className={classes.root}>
			<h2 className={classes.h2}>Chat</h2>
			{storeChatList.map((list) => (
				<ListItem key={list.id} userId={list.id} alignItems='flex-start'>
					<div>
						<ListItemText> ID: {list.id}</ListItemText>
						<ListItemText
							onClick={() => history.push(`/UsersProfile/${list.id}`)}
						>
							{' '}
							Name: {list.name}
						</ListItemText>
						<Button
							className={classes.rootButton}
							onClick={() => deleteChatHandler(list.id)}
						>
							Delete message
						</Button>
					</div>
				</ListItem>
			))}
		</List>
	);
};
export default ChatPage;
