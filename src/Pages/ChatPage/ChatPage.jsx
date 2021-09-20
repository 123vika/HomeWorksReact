import { List, ListItem, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './chatPageStyle.jsx';
const ChatPage = () => {
  const history = useHistory();
  const classes = useStyles();
  const chatList = [
    { id: Date.now() + 1, name: 'Vasyly' },
    { id: Date.now() + 2, name: 'Elena' },
    { id: Date.now() + 3, name: 'Ivan' },
  ];

  return (
    <List className={classes.root}>
      <h2 className={classes.h2}>Chat</h2>
      {chatList.map((list) => (
        <ListItem key={list.id} userId={list.id} alignItems='flex-start'>
          <div onClick={() => history.push(`/UsersProfile/${list.id}`)}>
            <ListItemText> ID: {list.id}</ListItemText>
            <ListItemText> Name: {list.name}</ListItemText>
          </div>
        </ListItem>
      ))}
    </List>
  );
};
export default ChatPage;
