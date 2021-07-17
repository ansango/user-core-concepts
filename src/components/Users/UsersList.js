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
              <p>
                <span>Name: </span>
                {user.name}, <span> Age: </span>{user.age} years old
              </p>
            </li>
          ))}
        </ul>
      )}
      {!areUsers && (
        <ul>
          <span className={classes.error}>Users not found</span>
        </ul>
      )}
    </Card>
  );
};

export default UsersList;
