import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-200 via-red-100 to-white">
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
}
