import React, { FC } from "react";
import { IUser } from "../models/IUser";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div>
      <h2>
        name: {user.name} - email: {user.email}
      </h2>
    </div>
  );
};

export default UserItem;
