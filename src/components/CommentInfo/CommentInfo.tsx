import { FC } from 'react';
import { Comment } from '../Types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: FC<Props> = (props) => {
  const {
    body,
    name,
    email,
  } = props.comment;

  return (
    <div className="comment">
      <div className="comment__info">
        <div className="comment__info-title">
          <p className="comment__info-name">
            Name:
            {' '}
            <strong className="comment__info-name">
              {name}
            </strong>
          </p>

          <p className="comment__info-email">
            Email:
            {' '}
            <a
              className="comment__info-email"
              href={email}
            >
              {email}
            </a>
          </p>
        </div>

        <div className="comment__info-body">
          {body}
        </div>
      </div>
    </div>
  );
};
