import { markdownToHtml, parseHtmlToReactJSX } from "@/lib/markdown";
import { useEffect, useState } from "react";

export const useMDBlock = (markdown: string) => {
    const [html, setHtml] = useState<string | null>(null);
    const [reactJSX, setReactJSX] = useState<React.ReactNode | null>(null);

    useEffect(() => {
        (async () => {
            const html = await markdownToHtml(markdown);
            setHtml(html);
        })();
    }, [markdown]);

    useEffect(() => {
        if (html) {
            const reactJSX = parseHtmlToReactJSX(html);
            setReactJSX(reactJSX);
        }
    }, [html]);

    return {
        MDBlockJSX: reactJSX,
    }
};
