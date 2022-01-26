import './App.css';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';

function App() {
  return (
    <div className="container">
      <Register />
      <hr />
      <Login />
      <hr />
      <Profile />
    </div>
  );
}

export default App;
