import { useEffect, useState } from 'react'; //
import MessageForm from './Components/MessageForm/MessageForm';
import MessageList from './Components/MessageList/MessageList';

function App() {
  // const [newMsg, setNewMsg] = false;
  // const addNewMsg = () => {
  //   setNewMsg((newMsg) => !newMsg);
  // }
  const [messageList, setMessageList] = useState([]);
  const addMessage = (message) => {
    setMessageList([...messageList, message])
  }

  useEffect(() => {
    const sayHello = setTimeout(() => {
      console.log('useEffect', sayHello);
      if(messageList && messageList.length > 0){
        const user = messageList[messageList.length - 1 ].author;
        console.log( messageList[messageList.length - 1 ]);
        alert(`Hello ${user}`);
      }
    }, 500) ; 
  }, [messageList]);
  

  return (
    <>
      <button >New Message</button>
      {/* <button onClick={newMsg}>New Message</button> */}
      <div>
        {/* {addNewMsg ? <MessageForm addMessage={addMessage}/> : null} */}
        <MessageForm addMessage={addMessage}/>
      </div>

      <MessageList propsList={messageList} />
    </>
  );
};

export default App;
