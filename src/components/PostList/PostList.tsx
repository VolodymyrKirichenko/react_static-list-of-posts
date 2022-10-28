import { FC } from 'react';
import { Post } from '../Types/Post';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[]
};

export const PostList: FC<Props> = (props) => {
  const { posts } = props;

  return (
    <div className="postList__wrapper">
      {posts.map((post) => (
        <div key={post.id} className="postList__item">
          <PostInfo post={post} />
        </div>
      ))}
    </div>
  );
};
