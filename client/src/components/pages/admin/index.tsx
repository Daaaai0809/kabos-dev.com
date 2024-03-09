import { BlogList } from '@/components/templates/Admin/BlogList';
import { ProductList } from '@/components/templates/Admin/ProductList';
import { adminIndexStyles } from './index.css';

export const AdminIndexPage = () => {
    return (
        <div className={adminIndexStyles.mainDiv}>
            <div className={adminIndexStyles.innerDiv}>
                <div className={adminIndexStyles.div}>
                    <h2>Blogs</h2>
                    <BlogList />
                </div>
                <div className={adminIndexStyles.div}>
                    <h2>Products</h2>
                    <ProductList />
                </div>
            </div>
        </div>
    )
};
