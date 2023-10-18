import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { fetchPosts, Post } from '../models/posts';
import PostList from '../component/PostList';
import PageLayout from '../component/PageLayout';

interface ServerData {
  posts: Post[];
}

export const getServerData = async () => {
  const posts = await fetchPosts();

  return {
    props: {
      posts,
    },
  };
};

const IndexPage: React.FC<PageProps<object, object, any, ServerData>> = ({ serverData }) => {
  return (
    <PageLayout>
      <PostList posts={serverData.posts} />
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
