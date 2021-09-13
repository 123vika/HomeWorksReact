import './message.scss';

const MessageComponent = ({ firstProps, secondProps }) => {
  console.log(firstProps, 'first message props');
  return <div className='message'>{secondProps}</div>;
};
export default MessageComponent;
