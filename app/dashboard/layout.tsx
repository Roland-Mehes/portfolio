import AdminSideBar from './(components)/AdminSideBar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminSideBar />
      {children}
    </>
  );
}
