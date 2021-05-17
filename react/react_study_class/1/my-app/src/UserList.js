function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}
function UserList() {
  const users = [
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
      id: 1,
      username: "name3",
      email: "333",
    },
  ];
  return (
    <div>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}
export default UserList;
