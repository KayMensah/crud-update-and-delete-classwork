// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import UserForm from "./UsersForm";
import UserList from "./UsersList";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Korkor", email: "komensah@gmail.com", gen: 20},
    {name: "Adriana", email: "adriana@gmail.com", gen: 21},
    {name: "Kuuku", email: "kuuku@gmail.com", gen: 22},
  
  ]
  );
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <UserForm addUser={addUser} />
      <UserList users={users} />
      
    </div>
  );
};


export default App;
