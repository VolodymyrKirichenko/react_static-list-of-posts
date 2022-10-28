import { FC } from 'react';
import { User } from '../Types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: FC<Props> = (props) => {
  const { user } = props;

  return (
    <div className="userInfo">
      <div className="userInfo__content">
        <p className="userInfo__email">
          {user.email}
        </p>

        <p className="userInfo__name">
          {user.name}
        </p>
      </div>
    </div>
  );
};
