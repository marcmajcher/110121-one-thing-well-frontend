import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import TopNav from './TopNav';

function App() {
  return (
    <div className="container">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
