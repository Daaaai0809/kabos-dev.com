export const apiRouters = {
    blogs: {
        index: '/blog/',
        search: '/blog/search',
        show: '/blog/',
        admin: {
            create: '/admin/blog/',
            update: '/admin/blog/',
            delete: '/admin/blog/',
        },
    },
    products: {
        index: '/product/',
        detail: '/product/',
        search: '/product/search',
        admin: {
            create: '/admin/product/',
            update: '/admin/product/',
            delete: '/admin/product/',
        },
    },
} as const;

export const apiRoute = process.env.NEXT_PUBLIC_API_PATH;
