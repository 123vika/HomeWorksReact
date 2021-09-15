import { useState } from 'react';
import './messageForm.scss';

const MessageForm = ({addMessage}) => {

  const [msg, setMsg] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <div className='message'>
      <label >Enter your message!<input 
        type='text'
        value={msg}
        onChange={(e)=>setMsg(e.target.value)}      
        />
      </label>
      <label>Enter your name! <input 
        type='text'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <button onClick={() => {
        addMessage({text: msg, author, id: Date.now()});
        setMsg('');
        setAuthor('');
      }}>
        Add message
      </button>
    </div>
  );
};

// const MessageForm = ({ firstProps, secondProps }) => {
//   console.log(firstProps, 'first message props');
//   return <div className='message'>{secondProps}</div>;
// };
export default MessageForm;
