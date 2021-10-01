import useStyles from "./messageListStyle";
import { Button, Typography, Card, CardContent } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessageList } from "../../actions/messageListAction";

const MessageList = ({ propsList }) => {
  const classes = useStyles();
  console.log(propsList);
  const dispatch = useDispatch();
  const msgList = useSelector((state) => state.messageListReducer.msg);
  console.log(msgList, "msgList");
  const deleteMsgHandler = (userId) => {
    dispatch(deleteMessageList(userId));
  };
  return (
    <Card className={classes.container}>
      {msgList.map((list) => (
        <CardContent key={list.id}>
          <Typography variant="body2" gutterBottom>
            Text : {list.text}
          </Typography>
          <Typography variant="body2" gutterBottom>
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
