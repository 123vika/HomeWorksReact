import FirstComponent from './Components/FirstComponent/FirstComponent';
import MessageComponent from './Components/Message/Message';
import SecondComponent from './Components/SecondComponent/SecondComponent';
import StyledComponent from './StyledComponent/StyledComponent';

const messageComponentText = 'Hello guys, this is first message component';
const secondComponentText = 'This is second component text';
function App() {
  return (
    <div className='App'>
      <p>Hello wopld</p>
      <FirstComponent />
      <SecondComponent text={secondComponentText} />
      <StyledComponent />
      <MessageComponent firstProps='1' secondProps={messageComponentText} />
    </div>
  );
}

export default App;
