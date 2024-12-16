import { FC, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: number
    lng: number
  }
};

interface User {
  id: number
  name: string
  username?: string
  email: string
  address?: Address
  website?: string
};

export const Users:FC = () => {  
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
        .then((data) => setUsers(data));
    
  }, []);

  const handleClickNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="users">
      <button onClick={handleClickNavigate}>
        назад
      </button>

      {users.map(user => {
        const {id, name, email, website } = user;
        return (
          <div 
            key={id}
            className='user'
          >
            <div>Имя: {name}</div>
            <div>email: {email}</div>
            <div>{id}</div>
            {website && <div>{website}</div>}
          </div>
        )
      })}
    </div>
  )
}