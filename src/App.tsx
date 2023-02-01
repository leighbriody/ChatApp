import './App.css';
import Header from './Components/Header';
import MessagesContainer from './Components/MessageContainer';
import Emoji from './Components/Emoji';
import SendMessage from './Components/SendMessage';
function App() {
  return (
    <div >
     <Header></Header>
     <Emoji></Emoji>
     <MessagesContainer></MessagesContainer>
   
    </div>
  );
}

export default App;
