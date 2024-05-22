import "@/styles/global.css";
import { MDBlock } from "../md-block";
import Link from "next/link";

export default {
  title: "Element/MD-Block",
  component: MDBlock,
};

export const Default = () => {
  return (
    <MDBlock
      parsedContent={
        <>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>Paragraph</p>
          <p>
            <Link href="/#">Link</Link>
          </p>

          <h2>Unordered List</h2>

          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>

          <h2>Ordered List</h2>

          <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ol>

          <h2>Codeblock</h2>
        </>
      }
    />
  );
};
