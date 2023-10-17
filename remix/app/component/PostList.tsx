import * as React from "react";
import PostListItem from "./PostListItem";
import { Post } from "~/models/posts.server";

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="timeline">
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
