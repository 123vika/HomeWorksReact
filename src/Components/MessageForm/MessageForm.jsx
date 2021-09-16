import { useState, useEffect, memo } from 'react';
import { useStyles } from './messageFormStyles.jsx';
import {TextField, Button} from '@material-ui/core';
import { useRef } from "react/cjs/react.development";

const MessageForm = ({ addMessage }) => {
  const classes = useStyles();
  const [msg, setMsg] = useState('');
  const [author, setAuthor] = useState('');

  const ref = useRef(null)
  useEffect(() => {
    console.log(ref);
    ref?.current.focus();
  }, []);

  return (
    <div className={classes.root} noValidate autoComplete='off'>
      <input type="text" ref={ref}/>
{/* В материал не хочет ставить фокус. Пока не разобралась как заставить. Если знаешь, подскажи, пожалуйста*/}
      <label className={classes.rootLabel}>
        Enter your message:
        <TextField className={classes.rootInput}
        
          id='standard-basic'
          type='text'
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
      </label>
      <label className={classes.rootLabel}>
        Enter your name:
        <TextField className={classes.rootInput}
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
