import React from 'react';
import rehypeHighlight from 'rehype-highlight';
import rehypeMathjax from 'rehype-mathjax';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import rehypeStringify from 'rehype-stringify';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { Node } from 'unist';
import { visit } from 'unist-util-visit';
import { Plugin, unified } from 'unified';
import Image from 'next/image';

const rehypeLinkCard: Plugin = () => {
    return async (tree: Node) => {
        visit(tree, 'element', (node: Node & { tagName: string; properties: { [key: string]: string } }) => {
            const { tagName, properties } = node;
            if (tagName === 'img' && properties) {
                node.properties.className = 'link-card';
                node.properties['data-src'] = node.properties.src;
                node.properties.src = '/api/link-card?url=' + encodeURIComponent(node.properties.src);
            }
        });
    };
}

export const markdownToHtml = async (markdown: string) => {
    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(remarkMath)
        .use(rehypeLinkCard)
        .use(rehypeParse, { fragment: true })
        .use(rehypeMathjax)
        .use(rehypeHighlight)
        .use(rehypeStringify)
    
    const res = await processor.processSync(markdown);

    return res.toString();
}

export const parseHtmlToReactJSX = (html: string) => {
    const processor = unified()
        .use(rehypeParse)
        // @ts-ignore
        .use(rehypeReact, {
            createElement: React.createElement,
            components: {
                img: Image,
                a: LinkCard,
            }
        });
    
    const reactJSX = processor.processSync(html).result;

    return reactJSX;
}

