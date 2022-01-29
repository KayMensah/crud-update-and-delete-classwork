import React from "react";
import User2 from "./User2";

const UserList2 = (props) => {
  return (
    <div>

      {props.users.map((user, index) => {
        return (
          <User2
            key={index}
            user={user}
            deleteUser={props.deleteUser}
            editUser={props.editUser}
          />
        );
      })}
    </div>
  );
};

export default UserList2;