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
          <div className="profile-item">
            <div className="profile-label">Username: </div>
            <div className="profile-value">{user.username}</div>
          </div>
          <div className="profile-item">
            <div className="profile-label">Email: </div>
            <div className="profile-value">{user.email}</div>
          </div>
          <button className="profile-button" onClick={resetUser}>
            Reset
          </button>
        </>
      )}
    </div>
  );
}
