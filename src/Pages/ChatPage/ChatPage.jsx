import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useStyles from "./chatPageStyle.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addChatList, deleteChat } from "../../actions/chatPageAction.jsx";
import { useEffect } from "react";

const ChatPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const storeChatList = useSelector((state) => state.chatPageReducer);
  console.log(storeChatList, "storeChatList");
  const chatList = [
    { id: Date.now() + 1, name: "Vasyly" },
    { id: Date.now() + 2, name: "Elena" },
    { id: Date.now() + 3, name: "Ivan" },
  ];

  useEffect(() => {
    dispatch(addChatList(chatList));
  }, []);

  const deleteChatHandler = (chatId) => {
    dispatch(deleteChat(chatId));
  };

  return (
    <List className={classes.root}>
      <h2 className={classes.h2}>Chat</h2>
      {storeChatList.map((list) => (
        <ListItem key={list.id} userId={list.id} alignItems="flex-start">
          <div>
            <ListItemText> ID: {list.id}</ListItemText>
            <ListItemText
              onClick={() => history.push(`/UsersProfile/${list.id}`)}
            >
              {" "}
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
