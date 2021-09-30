import { Button, Grid, Paper } from "@material-ui/core";
import { useState, useEffect, useCallback } from "react"; //
import { useStyles } from "./appStyle";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ChatPage from "./Pages/ChatPage/ChatPage";
import MessageForm from "./Components/MessageForm/MessageForm";
import MessageList from "./Components/MessageList/MessageList";
import HomePage from "./Pages/HomePage/HomePage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import UsersProfilePage from "./Pages/UsersProfilePage/UsersProfilePage";

function App() {
  const classes = useStyles();

  const [messageList, setMessageList] = useState([]);
  // const addMessage = useCallback((message) => {
  //   setMessageList((prevState) => [...prevState, message]);
  // }, []);
  useEffect(() => {
    const sayHello = setTimeout(() => {
      console.log("useEffect", sayHello);
      if (messageList && messageList.length > 0) {
        const user = messageList[messageList.length - 1].author;
        console.log(messageList[messageList.length - 1]);
        alert(`Hello ${user}`);
      }
    }, 250);
  }, [messageList]);

  let [newMsg, setNewMsg] = useState(false);
  const addNewMsg = () => {
    setNewMsg((newMsg) => !newMsg);
  };

  return (
    <Grid className={classes.root}>
      <Router>
        <Switch>
          <Route exact path="/newMessage">
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
          {/* addMessage={addMessage} */}
          <Route exact path="/chatPage">
            <Grid>
              <Paper className={classes.paper}>
                <ChatPage spacing={1} item />
              </Paper>
            </Grid>
          </Route>
          <Route exact path="/">
            <Link to="/homePage">Go to Home page</Link>
            <br />
            <Link to="/chatPage">Go to Chat page</Link>
            <br />
          </Route>
          <Route exact path="/UsersProfile/:userId">
            <UsersProfilePage />
          </Route>
          <Route exact path="/homePage">
            <HomePage />
          </Route>
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </Grid>
  );
}

export default App;
