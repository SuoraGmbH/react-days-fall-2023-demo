'use client';

import * as React from 'react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { addPost, PostWithoutId } from '@/models/posts.server';

interface Props {
  userId: string;
  onPostTextChanged: (text: string) => void;
}

const ComposePostForm: React.FC<Props> = ({ userId, onPostTextChanged }) => {
  const [postText, setPostText] = useState<string>('');
  const router = useRouter();

  const addNewPost = async (post: PostWithoutId) => {
    await addPost(post);

    router.push('/');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (postText.trim() === '') {
      event.preventDefault();
      return;
    }

    addNewPost({
      date: new Date().toISOString(),
      userId: userId,
      message: postText,
    });

    setPostText('');
    onPostTextChanged('');
    event.preventDefault();
  };

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
    onPostTextChanged(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="text" value={postText} onChange={handleInputChange} />
      <button type="submit">
        <span>Post</span>
      </button>
    </form>
  );
};

export default ComposePostForm;
