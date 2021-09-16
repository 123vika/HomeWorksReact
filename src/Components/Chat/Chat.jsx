import { List, ListItem, ListItemText } from '@material-ui/core';
// import { useState } from 'react';
import useStyles from './chatStyle.jsx';
const Chat = () => {

  const classes = useStyles();
  const chatList = [
    {id: Date.now()+1, name: 'Vasyly'}, 
    {id: Date.now()+2, name: 'Elena'}, 
    {id: Date.now()+3, name: 'Ivan'}
  ];
  
  // const [chatList, setChatList] = useState([]);
  // const changeChatList = () => {
  //   setChatList((prevList) => [...prevList, chatList]);
  // };
  return (
    <List className={classes.root}>
      {chatList.map((list) => (
        <ListItem key={list.id} alignItems='flex-start'>
          <ListItemText> ID: {list.id}</ListItemText>
          <ListItemText> Name:  {list.name}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
export default Chat;
