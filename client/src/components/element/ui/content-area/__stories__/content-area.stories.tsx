import "@/styles/global.css";
import { ContentArea } from "../content-area";
import Link from "next/link";

export default {
  title: "Element/UI/ContentArea",
  component: ContentArea,
};

export const Default = () => (
  <ContentArea>
    <>
      <p style={{ width: "100%", textOverflow: "inherit" }}>
        {`Hello, world! This is a paragraph. This is another paragraph. This is
        a third paragraph.
        yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeesssssssssssssssssssssssssssssssssssssssss^
        ^`}
      </p>

      <h1 style={{ width: "100%" }}>Heading 1</h1>
      <h2 style={{ width: "100%" }}>Heading 2</h2>
      <h3 style={{ width: "100%" }}>Heading 3</h3>
      <h4 style={{ width: "100%" }}>Heading 4</h4>
      <h5 style={{ width: "100%" }}>Heading 5</h5>

      <ul style={{ width: "100%" }}>
        <li>Unordered list item 1</li>
        <li>Unordered list item 2</li>
        <li>Unordered list item 3</li>
      </ul>

      <ol style={{ width: "100%" }}>
        <li>Ordered list item 1</li>
        <li>Ordered list item 2</li>
        <li>Ordered list item 3</li>
      </ol>

      <table style={{ width: "100%" }}>
        <thead style={{ width: "100%" }}>
          <tr>
            <th>Table header 1</th>
            <th>Table header 2</th>
            <th>Table header 3</th>
          </tr>
        </thead>
        <tbody style={{ width: "100%" }}>
          <tr>
            <td>Table data 1</td>
            <td>Table data 2</td>
            <td>Table data 3</td>
          </tr>
          <tr>
            <td>Table data 4</td>
            <td>Table data 5</td>
            <td>Table data 6</td>
          </tr>
          <tr>
            <td>Table data 7</td>
            <td>Table data 8</td>
            <td>Table data 9</td>
          </tr>
        </tbody>
      </table>

      <Link href="/#" style={{ width: "100%" }}>
        Link
      </Link>
    </>
  </ContentArea>
);
