"use client";

import * as React from "react";
import { ChangeEvent, useState } from "react";
import { Form } from "@remix-run/react";

interface Props {
  userId: string;
  onPostTextChanged: (text: string) => void;
}

const ComposePostForm: React.FC<Props> = ({ userId, onPostTextChanged }) => {
  const [postText, setPostText] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
    onPostTextChanged(event.target.value);
  };

  return (
    <Form method="post" action="/compose">
      <textarea name="message" value={postText} onChange={handleInputChange} />
      <input type="hidden" name="userId" value={userId} />
      <button type="submit">
        <span>Post</span>
      </button>
    </Form>
  );
};

export default ComposePostForm;
