import AdminSideBar from './(components)/AdminSideBar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AdminSideBar />
        {children}
      </body>
    </html>
  );
}
