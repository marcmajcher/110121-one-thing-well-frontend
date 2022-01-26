import useFetchApi from './lib/useFetchApi';
import useUserState from './lib/useUserState';

export default function Profile() {
  const [user, , resetUser, setUser] = useUserState();
  const getProfile = useFetchApi('/profile', onProfile);

  function onProfile(json) {
    console.log('got profile:', json);
    setUser({
      username: json.username,
      email: json.email,
    });
  }

  return (
    <div>
      {!user.username ? (
        <button onClick={getProfile}>Get Profile</button>
      ) : (
        <>
          <div>Username: {user.username}</div>
          <div>Email: {user.email}</div>
          <button onClick={resetUser}>Reset</button>
        </>
      )}
    </div>
  );
}
