import { useEffect, useState } from 'react';
import chewbacca from '../assets/chewbacca.jpg';
import Loader from '../components/Loader';
import { fetchUsers } from '../services/usersService';

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState(null);
  const hasUsers = listOfUsers.length > 0;
  const isLoading = status === 'LOADING';

  useEffect(() => {
    if (!hasUsers && status === 'IDLE') {
      setStatus('LOADING');
      fetchUsers()
        .then((result = []) => {
          setStatus('LOADED');
          setListOfUsers(result);
        })
        .catch(() => {
          setStatus('LOADED');
          setError("Something wrong isn't right");
        });
    }
  }, [hasUsers, status]);

  return (
    <main>
      <h1>Users</h1>
      {isLoading && <Loader />}
      {error && (
        <>
          <p>{error}</p>
          <p>
            <button onClick={() => setStatus('IDLE')}>Try again</button>
          </p>
        </>
      )}
      <form>
        <span>
          <label htmlFor="user-list-search">Search</label>
          <input type="search" id="user-list-search" name="search" />
        </span>
        <span>
          <label htmlFor="user-list-sorting">Sort by</label>
          <select id="user-list-sorting"></select>
        </span>
      </form>
      {hasUsers && (
        <section>
          <ul>
            {listOfUsers.map(({ email, id, name, username }) => (
              <li key={id}>
                <img width="80" src={chewbacca} alt="Chewbacca Avatar" />
                <p>
                  {name} <br /> {username} <br />
                  <a href="mailto:{email}">{email}</a>
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

export default UserList;
