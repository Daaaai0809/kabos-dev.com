import Layout from '@/components/layout/Layout';
import AdminLayout from '@/components/layout/AdminLayout';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdmin = router.pathname.startsWith('/admin');
  
  if (isAdmin) {
    return (
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    );
  }

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
