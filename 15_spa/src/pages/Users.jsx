import { useLoaderData } from "react-router";

const Users = () => {
  // useEffect(fetch داخلش) + useState

  const users = useLoaderData();
  console.log(users);

  return (
    <div>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
      users
    </div>
  );
};

export default Users;
