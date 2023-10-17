import * as React from "react";
import Markdown from "~/component/Markdown";

interface Props {
  text: string;
}

const PostPreview: React.FC<Props> = ({ text }) => {
  return (
    <div className="preview">
      <h2>Preview</h2>
      <div className="preview-content">
        <Markdown text={text} />
      </div>
    </div>
  );
};

export default PostPreview;
