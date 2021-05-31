import InputSample from "./InputSample";
import UserList from "./UserList";
import { useRef, useState } from "react";
import CreateUser from "./createUser";
// function App() {
//   const [inputs, setInputs] = useState({
//     username: "",
//     email: "",
//   });
//   const { username, email } = inputs;
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: "velopert",
//       email: "public.velopert@gmail.com",
//       active: false,
//     },
//     {
//       id: 2,
//       username: "tester",
//       email: "tester@example.com",
//       active: true,
//     },
//     {
//       id: 3,
//       username: "liz",
//       email: "liz@example.com",
//       active: false,
//     },
//   ]);

//   const nextId = useRef(4);
//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value,
//     });
//   };

//   const onCreate = () => {
//     const user = {
//       id: nextId.current,
//       username,
//       email,
//       active: false,
//     };
//     setUsers(users.concat(user));
//     nextId.current += 1;
//     setInputs({
//       username: "",
//       email: "",
//     });
//   };

//   const onRemove = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   const onToggle = (id) => {
//     setUsers(
//       users.map((user) =>
//         user.id === id ? { ...user, active: !user.active } : user
//       )
//     );
//   };

//   return (
//     <div>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//     </div>
//   );
// }

// export default App;

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: false,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: true,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = usseReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name: name,
      value: value,
    });
  };
  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
        active: false,
      },
    });
    nextId.current += 1;
  };

  const onToggle = (id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
  };

  const onRemove = (id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  };
}

export default App;
