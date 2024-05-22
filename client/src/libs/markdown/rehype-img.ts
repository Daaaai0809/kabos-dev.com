import type { Node } from "unist";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

const rehypeImg: Plugin = () => {
  return (tree: Node) => {
    visit(
      tree,
      "element",
      (
        node: Node & {
          tagName: string;
          properties: { [key: string]: string | number };
        },
      ) => {
        const { tagName, properties } = node;

        if (tagName === "img" && properties) {
          properties.width = 640;
          properties.height = 360;
        }
      },
    );
  };
};

export default rehypeImg;
