export interface Post {
  id: number;
  userId: string;
  message: string;
  date: string;
}

export type PostWithoutId = Omit<Post, 'id'>;

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('http://localhost:4712/posts', {
    cache: 'no-store',
  });
  return response.json();
};

export const addPost = async (post: PostWithoutId): Promise<Post> => {
  const response = await fetch('http://localhost:4712/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });

  return response.json();
};
