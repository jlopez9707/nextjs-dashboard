import { User } from "@/app/lib/definitions";
import { getUsers } from "@/app/lib/querysmysql";

export default async function CustomersPage() {
  const users = await getUsers();
  console.log(users);
  return (
    <>
      <div>Customers Page</div>
      {users.map((item) => (<p key={item.id}>{item.name}</p>))}
    </>
  );
}
