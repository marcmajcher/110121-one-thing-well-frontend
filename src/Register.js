import useFetchApi from './lib/useFetchApi';
import useUserState from './lib/useUserState';

export default function Register() {
  const [user, updateUserState, resetUser] = useUserState()
  const registerApi = useFetchApi('/users', onRegistered, 'POST');

  function onRegistered(data) {
    console.log('REGISTERED', data);
  }

  function submitRegistration(e) {
    e.preventDefault();
    registerApi({user});
    resetUser();
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
            onChange={updateUserState}
          />
        </div>
        <div>
          Email:{' '}
          <input
            type="text"
            name="email"
            value={user.email}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
