// import { useState } from 'react';
import './messageList.scss';

const MessageList = ({ propsList }) => {
  console.log(propsList);
  // const [messageList, setMessageList] = useState({});
  // const changeMessageListHandler = () => {
  //   setMessageList();
  // };
  return (
    <div className='container'>
      {propsList.map((list) => (
        <div key={list.id}>
          <p>Text : {list.text}</p>
          <p>Autor : {list.author}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
