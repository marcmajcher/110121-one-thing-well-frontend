import { useState } from 'react';
import useFetchApi from './useFetchApi';

export default function Login() {
  const [user, setUser] = useState({});
  const loginApi = useFetchApi('/login', onLoggedIn, 'POST');

  function submitLogin(e) {
    e.preventDefault();
    loginApi({ user });
    setUser({});
  }

  function onLoggedIn(json) {
    localStorage.setItem('jwt', json.jwt);
  }

  function changeUserState(e) {
    const key = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [key]: value });
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
        <div>
          Username:{' '}
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={changeUserState}
          />
        </div>
        <div>
          Password:{' '}
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={changeUserState}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
