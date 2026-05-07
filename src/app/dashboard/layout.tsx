import Sidebar from '@/components/dashboard/Sidebar'
import Topbar from '@/components/dashboard/Topbar'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="dashboard-layout">
            {/* Sidebar is fixed to the left */}
            <Sidebar />

            <div className="dashboard-main">
                {/* Topbar stays at the top of the main area */}
                <Topbar />

                <main className="dashboard-content">
                    {children}
                </main>
            </div>
        </div>
    )
}