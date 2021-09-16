import { Button, Grid, Paper } from '@material-ui/core';
import { useEffect, useState, useCallback } from 'react';
import { useStyles } from './appStyle';
import Chat from './Components/Chat/Chat';
import MessageForm from './Components/MessageForm/MessageForm';
import MessageList from './Components/MessageList/MessageList';

function App() {
  const classes = useStyles();

  let [newMsg, setNewMsg] = useState(false);
  const addNewMsg = () => {
    setNewMsg((newMsg) => !newMsg);
  };

  const [messageList, setMessageList] = useState([]);
  const addMessage = useCallback((message) => {
    setMessageList((prevState) => [...prevState, message]);
  }, []);

  useEffect(() => {
    const sayHello = setTimeout(() => {
      console.log('useEffect', sayHello);
      if (messageList && messageList.length > 0) {
        const user = messageList[messageList.length - 1].author;
        console.log(messageList[messageList.length - 1]);
        alert(`Hello ${user}`);
      }
    }, 250);
  }, [messageList]);

  return (
    <Grid className={classes.root}>
      <Grid container spacing={3} item xs={6}>
        <div>
          <Button className={classes.root_appButton} onClick={addNewMsg}>
            New Message
          </Button>
        </div>
        
        <div>{newMsg ? <MessageForm addMessage={addMessage} /> : null}</div>
          {newMsg ? <MessageList propsList={messageList} /> : null}
       
      </Grid>
      <Grid >
        <Paper className={classes.paper} >
          <Chat spacing={1} item/>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
