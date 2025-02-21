import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-200 via-red-100 to-white">
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
}
=======
  return <DashboardLayout>{children}</DashboardLayout>;
} 
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
