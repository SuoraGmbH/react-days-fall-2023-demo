'use client';

import React, { useState } from 'react';
import ComposePostForm from '@/component/ComposePostForm';
import PostPreview from '@/component/PostPreview';

export default function Home() {
  const [postText, setPostText] = useState<string>('');

  return (
    <div className="compose">
      <ComposePostForm
        userId="muhdiekuh"
        onPostTextChanged={(text) => setPostText(text)}
      />
      <PostPreview text={postText}></PostPreview>
    </div>
  );
}
