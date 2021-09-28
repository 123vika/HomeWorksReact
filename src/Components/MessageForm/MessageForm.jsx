import { useState, memo } from 'react'; //useEffect,
import { useStyles } from './messageFormStyles.jsx';
import { TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addMessageList } from '../../actions/messageListAction.jsx';

const MessageForm = () => {
  //{ addMessage }
  const classes = useStyles();
  const [msg, setMsg] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const addMessage = (message) => {
    dispatch(addMessageList(message));
  };

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
