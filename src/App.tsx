import { FC } from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post } from './components/Types/Post';
import { PostList } from './components/PostList';

const arrayPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(({ id }) => id === post.userId) || null,
  comments: comments.filter(({ postId }) => postId === post.id),
}));

export const App: FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={arrayPosts} />
  </section>
);
