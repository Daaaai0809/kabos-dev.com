import * as prod from "react/jsx-runtime";
import React from "react";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeImg from "./rehype-img";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { unified } from "unified";

const production = {
  Fragment: prod.Fragment,
  jsx: prod.jsx,
  jsxs: prod.jsxs,
  createElement: React.createElement,
};

export const markdownToHtml = async (markdown: string) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeImg)
    .use(rehypeKatex)
    .use(rehypePrettyCode)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
};

export const parseHtmlToReactJSX = (html: string) => {
  const result = unified()
    .use(rehypeParse, { fragment: true })
    // @ts-ignore
    .use(rehypeReact, production)
    .processSync(html);

  return result.result;
};
