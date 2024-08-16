import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = {
  children: React.ReactElement;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
