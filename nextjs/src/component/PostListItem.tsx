import * as React from 'react';
import { Post } from '@/models/posts.server';
import Markdown from 'react-markdown';

interface Props {
  post: Post;
}

const PostListItem: React.FC<Props> = ({ post }) => {
  return (
    <li>
      <div className="avatar">
        <img src={`http://i.pravatar.cc/100?u=${post.userId}`} />
      </div>
      <div className="post-wrapper">
        <div className="post">
          <h6>{post.userId}</h6>
          <Markdown>{post.message}</Markdown>
        </div>
        <div className="arrow" />
      </div>
    </li>
  );
};

export default PostListItem;
