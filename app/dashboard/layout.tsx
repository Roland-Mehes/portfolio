import AdminSideBar from './(components)/AdminSideBar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <AdminSideBar />
      <div className="flex-grow p-6 ml-20 w-fit">{children} </div>
    </div>
  );
}
