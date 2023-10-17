import * as React from 'react';
import PostListItem from './PostListItem';
import { fetchPosts } from '@/models/posts.server';

const PostList: React.FC = async () => {
  const posts = await fetchPosts();
  return (
    <ul className="timeline">
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
