import DefaultLayout from "@components/default-layout/default-layout.component";

const Layout = ({ children }) => (
  <DefaultLayout>
    <div className="max-w-5xl p-10 mx-auto">{children}</div>
  </DefaultLayout>
);

export default Layout;
