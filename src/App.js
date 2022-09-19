import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import axios from 'axios';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [invites, setInvites] = React.useState([]);
  const [success, setSuccess] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else setInvites([...invites, id]);
  };
  const onClickSuccess = () => {
    setSuccess(true);
  };
  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };
  console.log(searchValue);

  React.useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        alert('Произошла ошибка', err);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          onClickInvite={onClickInvite}
          invites={invites}
          onClickSuccess={onClickSuccess}
          searchValue={searchValue}
          onChangeSearch={onChangeSearch}
        />
      )}
    </div>
  );
}

export default App;
