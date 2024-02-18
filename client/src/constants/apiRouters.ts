export const apiRouters = {
    blogs: {
        index: '/blog/',
        search: '/blog/search',
    },
    products: {
        index: '/products/',
        detail: '/products/',
        search: '/products/search',
    },
} as const;

export const apiRoute = process.env.NEXT_PUBLIC_API_PATH;
