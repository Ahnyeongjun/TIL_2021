import InputSample from "./InputSample";
import UserList from "./UserList";
import { useRef, useState } from "react";
import CreateUser from "./createUser";
function App() {
  const [inputs, setInput] = useState({
    username: "",
    email: "",
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "name1",
      email: "111",
    },
    {
      id: 2,
      username: "name2",
      email: "222",
    },
    {
      id: 3,
      username: "name3",
      email: "333",
    },
  ]);

  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    setInput({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };
  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onCreate={onCreate}
        onChange={onChange}
      />
      <UserList users={users} onCreate={onCreate} />
      <InputSample />
    </div>
  );
}

export default App;
