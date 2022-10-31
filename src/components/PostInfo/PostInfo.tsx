import { FC } from 'react';
import { Post } from '../Types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

interface Props {
  post: Post;
}

export const PostInfo: FC<Props> = (props) => {
  const {
    title,
    body,
    user,
    comments,
  } = props.post;

  return (
    <div className="postInfo">
      <div className="postInfo__header">

        <p className="postInfo__info-title">
          User:
        </p>

        {user && <UserInfo user={user} />}
        <h3 className="postInfo__title">{title}</h3>

        <p style={{ marginBottom: '12px' }}>
          {body}
        </p>
      </div>

      <CommentList comments={comments} />
    </div>
  );
};
