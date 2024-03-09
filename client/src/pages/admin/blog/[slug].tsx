import { BlogDetail } from "@/components/pages/admin/blogs/detail";

export default function AdminBlogDetail({ id }: { id: number }) {
    return (
        <BlogDetail id={id} />
    );
};

export const getServerSideProps = async (context: any) => {
    const id = context.params.slug;

    if (!id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            id: id as number
        }
    }
}
