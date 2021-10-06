import { useState, memo } from 'react'; //useEffect,
import { useStyles } from './messageFormStyles.js';
import { TextField, Button } from '@material-ui/core';
import useMessageForm from './useMessageForm.js';

const MessageForm = () => {
	//{ addMessage }
	const classes = useStyles();

	const [msg, setMsg] = useState('');
	const [author, setAuthor] = useState('');

	const addMessage = useMessageForm();

	return (
		<div className={classes.root} noValidate autoComplete='off'>
			<label className={classes.rootLabel}>
				Enter your message:
				<TextField
					className={classes.rootInput}
					autoFocus
					id='standard-basic'
					type='text'
					value={msg}
					onChange={(e) => setMsg(e.target.value)}
				/>
			</label>
			<label className={classes.rootLabel}>
				Enter your name:
				<TextField
					className={classes.rootInput}
					id='standard-basic'
					type='text'
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
			</label>
			<Button
				className={classes.rootButton}
				onClick={() => {
					addMessage({ text: msg, author, id: Date.now() });
					setMsg('');
					setAuthor('');
				}}
			>
				Add message
			</Button>
		</div>
	);
};

export default memo(MessageForm);
