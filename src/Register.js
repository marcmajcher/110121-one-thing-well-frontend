import useFetchApi from './lib/useFetchApi';
import { useNavigate } from 'react-router-dom';
import useUserState from './lib/useUserState';

export default function Register() {
  const navigate = useNavigate();
  const [user, updateUserState, resetUser] = useUserState();
  const registerApi = useFetchApi('/users', onRegistered, 'POST');

  function onRegistered(data) {
    console.log('REGISTERED', data);
    navigate('/login');
  }

  function submitRegistration(e) {
    e.preventDefault();
    registerApi({ user });
    resetUser();
  }

  return (
    <div>
      <h1>Create New User</h1>
      <form onSubmit={submitRegistration}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={updateUserState}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={updateUserState}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={updateUserState}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
