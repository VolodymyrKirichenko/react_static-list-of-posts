import { FC } from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import postsFromComments from './api/comments';
import postsFromUsers from './api/users';
import { Post } from './components/Types/Post';
import { PostList } from './components/PostList';

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: postsFromUsers.find(({ id }) => id === post.userId) || null,
  comments: postsFromComments.filter(({ postId }) => postId === post.id),
}));

export const App: FC = () => (
  <section className="app">
    <h1 className="app__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
