import { FC } from 'react';
import { Comment } from '../Types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

interface Props {
  comments: Comment[];
}

export const CommentList: FC<Props> = (props) => {
  const { comments } = props;

  return (
    <div className="commentList">
      <h3 className="commentList__title">
        Comment:
      </h3>

      {comments.map((comment) => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
