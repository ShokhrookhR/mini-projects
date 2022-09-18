import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import axios from 'axios';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://reqres.in/api/users')
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        alert('Произошла ошибка', err);
      });
    setIsLoading(false);
  }, []);
  return (
    <div className="App">
      <Users items={users} isLoading={isLoading} />
      {/* <Success /> */}
    </div>
  );
}

export default App;
