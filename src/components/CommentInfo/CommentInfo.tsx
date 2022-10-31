import { FC } from 'react';
import { Comment } from '../Types/Comment';
import './CommentInfo.scss';

interface Props {
  comment: Comment;
}

export const CommentInfo: FC<Props> = (props) => {
  const {
    body,
    name,
    email,
  } = props.comment;

  return (
    <div className="comment">
      <div className="comment__info-title">
        <p className="comment__info-name">
          {`Name: ${name}`}
        </p>

        <p>
          {'Email: '}

          <a href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      </div>

      <div>
        {body}
      </div>
    </div>
  );
};
