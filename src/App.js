import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import TopNav from './TopNav';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTodos } from './lib/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch(API).then(res =>res.json()).then(json => console.log)
    const json = ['ababa', 'abasbff', 'sgagasgag'];
    dispatch(setTodos(json));
  }, []);

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
