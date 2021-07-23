import Error from 'components/Error';
import Filters from 'components/Filters';
import ListOfUsers from 'components/ListOfUsers';
import { useEffect, useMemo, useState } from 'react';
import Loader from '../components/Loader';
import {
  fetchUsers,
  filterUsersByText,
  sortUsersByFieldName,
} from '../services/usersService';

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState('');
  const [searchBy, setSearchBy] = useState('');
  const [sortBy, setSortBy] = useState('');

  const hasUsers = listOfUsers.length > 0;
  const isLoading = status === 'LOADING';

  const filteredListOfUsers = useMemo(() => {
    const list = filterUsersByText(listOfUsers, searchBy);
    return sortUsersByFieldName(list, sortBy);
  }, [listOfUsers, searchBy, sortBy]);

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

  function onFilterChange(fieldName, value) {
    switch (fieldName) {
      case 'search':
        setSearchBy(value);
        break;
      case 'sort':
        setSortBy(value);
        break;

      default:
        break;
    }
  }

  return (
    <main>
      <header>
        <h1>Users</h1>
        <Filters onChange={onFilterChange} />
      </header>

      {isLoading && <Loader />}

      {error && <Error message={error} onRetry={() => setStatus('IDLE')} />}

      {hasUsers && <ListOfUsers listOfUsers={filteredListOfUsers} />}
    </main>
  );
}

export default UserList;
