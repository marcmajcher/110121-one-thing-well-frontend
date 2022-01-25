const API = 'http://localhost:3000/api/v1';

export default function useFetchApi(route, callback, method) {
  return (data = {}) => {
    fetch(`${API}/${route}`, {
      method,
      headers: {
        Accepts: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(callback);
  };
}
