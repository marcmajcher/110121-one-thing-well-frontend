import { useState } from 'react';
import useFetchApi from './useFetchApi';

export default function Register() {
  const [user, setUser] = useState({});
  const registerApi = useFetchApi('/users', onRegistered, 'POST');

  function onRegistered(data) {
    console.log('GOT', data);
  }

  function submitRegistration(e) {
    e.preventDefault();
    registerApi({user});
    setUser({});
  }

  function changeUserState(e) {
    const key = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [key]: value });
  }

  return (
    <div>
      <h1>Create New User</h1>
      <form onSubmit={submitRegistration}>
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
          Email:{' '}
          <input
            type="text"
            name="email"
            value={user.email}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
