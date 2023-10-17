import * as React from 'react';
import Markdown from 'react-markdown';

interface Props {
  text: string;
}

const PostPreview: React.FC<Props> = ({ text }) => {
  return (
    <div className="preview">
      <h2>Preview</h2>
      <div className="preview-content">
        <Markdown>{text}</Markdown>
      </div>
    </div>
  );
};

export default PostPreview;
