import useStyles from './messageListStyle';
import { Button, Typography, Card, CardContent } from '@material-ui/core';
import useMessageList from './useMessageList';

const MessageList = ({ propsList }) => {
	const classes = useStyles();
	console.log(propsList);
	const [msgList, deleteMsgHandler] = useMessageList();

	return (
		<Card className={classes.container}>
			{msgList.map((list) => (
				<CardContent key={list.id}>
					<Typography variant='body2' gutterBottom>
						Text : {list.text}
					</Typography>
					<Typography variant='body2' gutterBottom>
						Autor : {list.author}
					</Typography>
					<Button
						className={classes.rootButton}
						onClick={() => deleteMsgHandler(list.id)}
					>
						Delete message
					</Button>
				</CardContent>
			))}
		</Card>
	);
};

export default MessageList;
