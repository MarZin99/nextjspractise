import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <div className="p-3 flex flex-col relative h-full">
      <div className="w-auto flex justify-between">
        <div>Users</div>
      </div>
      <ul className="p">
        {users.map((user) => (
          <li key={user.id}>
            {user.id}. {user.name}
          </li>
        ))}
      </ul>
      <div className="flex absolute bottom-5 right-5 sm:bottom-auto sm:top-5">
        <div className="flex relative">
          <div className="rounded-xl absolute -right-3 -top-3 w-6 h-6 bg-green-500 flex justify-center items-center text-white pb-1 text-2xl">
            +
          </div>
          <Link className={"rounded-xl px-2 py-1 bg-white"} href="users/new">
            Create User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
