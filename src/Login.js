import useFetchApi from './lib/useFetchApi';
import useUserState from './lib/useUserState';

export default function Login() {
  const [user, updateUserState, resetUser] = useUserState();
  const loginApi = useFetchApi('/login', onLoggedIn, 'POST');

  function submitLogin(e) {
    e.preventDefault();
    loginApi({ user: { username: user.username, password: user.password } });
    resetUser({});
  }

  function onLoggedIn(json) {
    console.log('LOGGED IN:', json.jwt)
    localStorage.setItem('jwt', json.jwt);
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
            onChange={updateUserState}
          />
        </div>
        <div>
          Password:{' '}
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={updateUserState}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
