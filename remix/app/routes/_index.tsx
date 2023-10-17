import { fetchPosts } from "~/models/posts.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PostList from "~/component/PostList";

export const loader = async () => {
  const posts = await fetchPosts();
  return json(posts);
};

export default function Timeline() {
  const posts = useLoaderData<typeof loader>();

  return <PostList posts={posts} />;
}
