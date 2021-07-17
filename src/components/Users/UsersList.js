import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = ({ users }) => {
  const areUsers = users.length > 0;
  return (
    <Card className={classes.users}>
      {areUsers && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} {user.age} years old
            </li>
          ))}
        </ul>
      )}
      {!areUsers && <div> Users not found</div>}
    </Card>
  );
};

export default UsersList;
