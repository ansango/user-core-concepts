import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { generateId } from "./utils";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (name, age) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { name: name, age: age, id: generateId() }];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
