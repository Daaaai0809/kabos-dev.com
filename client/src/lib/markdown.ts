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
import { LinkCard } from '@/components/layout/LinkCard';

const rehypeLinkCard: Plugin = () => {
    return async (tree: Node) => {
        const promises: Promise<void>[] = [];

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

