import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import PageLayout from '../component/PageLayout';
import ComposePostForm from '../component/ComposePostForm';
import PostPreview from '../component/PostPreview';
import { useState } from 'react';
import { Post } from '../models/posts';

interface ServerData {
  posts: Post[];
}

const IndexPage: React.FC<PageProps<object, object, any, ServerData>> = ({ serverData }) => {
  const [postText, setPostText] = useState<string>('');

  return (
    <PageLayout>
      <div className='compose'>
        <ComposePostForm
          userId='muhdiekuh'
          onPostTextChanged={(text) => setPostText(text)}
        />
        <PostPreview text={postText}></PostPreview>
      </div>
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
