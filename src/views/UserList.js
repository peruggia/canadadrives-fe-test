import Filters from 'components/Filters';
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
          setListOfUsers(result);
        })
        .catch(() => {
          setError("Something wrong isn't right");
        })
        .finally(() => {
          setStatus('LOADED');
        });
    }
  }, [hasUsers, status]);

  return (
    <main>
      <header>
        <h1>Users</h1>
        <Filters />
      </header>

      {isLoading && <Loader />}

      {error && (
        <>
          <p>{error}</p>
          <p>
            <button onClick={() => setStatus('IDLE')}>Try again</button>
          </p>
        </>
      )}

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
