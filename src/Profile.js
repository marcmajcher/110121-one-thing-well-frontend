import { useState } from 'react';

export default function Profile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const API = 'http://localhost:3000/api/v1';

  function getProfile() {
    fetch(`${API}/profile`, {
      method: 'GET',
      headers: {
        Accepts: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log('got profile:', json);
        setUsername(json.username);
        setEmail(json.email);
      });
  }

  function resetProfile() {
    setUsername();
    setEmail();
  }

  return (
    <div>
      {!username ? (
        <button onClick={getProfile}>Get Profile</button>
      ) : (
        <>
          <div>Username: {username}</div>
          <div>Email: {email}</div>
          <button onClick={resetProfile}>Reset</button>
        </>
      )}
    </div>
  );
}
