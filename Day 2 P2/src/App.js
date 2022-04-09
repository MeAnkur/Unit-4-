import logo from './logo.svg';
import './App.css';
import Join from './JoinUs';
import Settings from './Settings';
import Login from './Login';
import ContactUs from './ContactUs';
import Search from './Search';
import Help from './Help';
import Download from './Download';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Join   className="join"/>
      <Settings   className="setting" />
      <Login   className="login" />
      <ContactUs   className="contact" /> 
      <Search   className="search" />
      <Help   className="help" />
      <Home   className="home" />  
      <Download   className="download"/>
    </div>
  );
}

export default App;
