import { useNavigate } from 'react-router-dom';
import useFetchApi from './lib/useFetchApi';
import useUserState from './lib/useUserState';

export default function Login() {
  const navigate = useNavigate();
  const [user, updateUserState, resetUser] = useUserState();
  const loginApi = useFetchApi('/login', onLoggedIn, 'POST');

  function submitLogin(e) {
    e.preventDefault();
    loginApi({ user: { username: user.username, password: user.password } });
    resetUser();
  }

  function onLoggedIn(json) {
    console.log('LOGGED IN:', json.jwt);
    localStorage.setItem('jwt', json.jwt);
    navigate('/profile');
  }

  return (
    <div>
      {localStorage.getItem('jwt') ? (
        <button
          onClick={() => {
            localStorage.setItem('jwt', '');
            navigate('/');
          }}
        >
          Logout
        </button>
      ) : (
        <>
          <h1>Login</h1>
          <form onSubmit={submitLogin}>
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
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={updateUserState}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
  );
}
