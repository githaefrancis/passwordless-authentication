import './App.css';
import Login from './components/Auth/Login';
import {Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home/Home';
import Verify from './components/Auth/Verify';

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/verify" element={<Verify />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
