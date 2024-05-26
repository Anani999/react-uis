import './App.css'
import ChatList from './components/ChatList';
import Chat from './components/Chat';

const App = () => {
    return (
        <div className='Hero'>
            <ChatList/>
            <Chat/>
        </div>
    );
}
export default App;