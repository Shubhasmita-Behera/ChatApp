import logo from './logo.svg';
import './App.css';
import googlebutton from './Images/googlebtn.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Welcome from './Componets/Welcome';
import ChatBox from './Componets/ChatBox';
import Navbar from './Componets/Navbar';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Navbar/>
    
        {!user?<Welcome/>:<ChatBox/>}
     
    </div>
  );
}

export default App;
