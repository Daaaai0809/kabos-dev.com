export const apiRouters = {
    blogs: {
        index: '/blog/',
        search: '/blog/search',
    },
} as const;

export const apiRoute = process.env.NEXT_PUBLIC_API_PATH;
