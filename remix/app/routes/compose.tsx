import ComposePostForm from "~/component/ComposePostForm";
import PostPreview from "~/component/PostPreview";
import { useState } from "react";

import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { addPost, Post } from "~/models/posts.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const post = Object.fromEntries(formData.entries());
  const date = new Date().toISOString();

  await addPost({ date, ...(post as any) });

  return redirect(`/`);
}

export default function Compose() {
  const [postText, setPostText] = useState<string>("");

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
