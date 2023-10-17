import * as React from "react";
import { Post } from "~/models/posts.server";
import Markdown from "~/component/Markdown";

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
          <Markdown text={post.message} />
        </div>
        <div className="arrow" />
      </div>
    </li>
  );
};

export default PostListItem;
