import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    console.log(user);
    return () => {
      console.log("컴포넌트과 화면에 사라짐");
    };
  }, [user]);

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
