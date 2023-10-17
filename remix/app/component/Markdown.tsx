import { Remarkable } from "remarkable";

interface Props {
  text: string;
}

const Markdown: React.FC<Props> = ({ text }) => {
  const parser = new Remarkable();
  const markdown = parser.render(text);

  return <div dangerouslySetInnerHTML={{ __html: markdown }}></div>;
};

export default Markdown;
