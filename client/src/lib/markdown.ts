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
import * as prod from 'react/jsx-runtime';
import { LinkCard } from '@/components/layout/LinkCard';

const production = {
    // @ts-expect-error
    Fragment: prod.Fragment, 
    // @ts-expect-error
    jsx: prod.jsx, 
    // @ts-expect-error
    jsxs: prod.jsxs, 
    createElement: React.createElement,
    components: {
        img: Image,
        a: LinkCard,
    },}

const rehypeLinkCard: Plugin = () => {
    return async (tree: Node) => {
        visit(tree, 'element', (node: Node & { tagName: string; properties: { [key: string]: string } }) => {
            const { tagName, properties } = node;
            if (tagName === 'img' && properties) {
                node.properties.src = encodeURIComponent(node.properties.src);
                node.properties.alt = properties.alt || '';
            }

            if (tagName === 'a' && properties) {
                const href = properties.href;
                if (typeof href === 'string') {
                    node.properties.url = href;
                }
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
        .use(rehypeMathjax)
        .use(rehypeHighlight)
        .use(rehypeStringify)
    
    const res = await processor.process(markdown);

    return res.toString();
}

export const parseHtmlToReactJSX = (html: string) => {
    const reactProcessor = unified()
        .use(rehypeParse, { fragment: true })
        // @ts-ignore
        .use(rehypeReact, production)

    const res = reactProcessor.processSync(html);

    return res.result;
}

