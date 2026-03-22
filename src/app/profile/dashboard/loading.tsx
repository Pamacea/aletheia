export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-paper-50">
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="w-20 h-8 bg-paper-200 animate-pulse" />
            <div className="w-48 h-8 bg-paper-200 animate-pulse" />
            <div className="w-20" />
          </div>
        </div>
      </header>
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="content-2-3 space-y-6">
          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="p-4 border-2 border-paper-300 animate-pulse">
                <div className="h-8 bg-paper-200 w-12 mb-2" />
                <div className="h-4 bg-paper-200/60 w-20" />
              </div>
            ))}
          </div>
          {/* Quick actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-6 border-2 border-paper-300 animate-pulse">
                <div className="h-6 bg-paper-200 w-3/4 mb-3" />
                <div className="h-4 bg-paper-200/60 w-full" />
              </div>
            ))}
          </div>
          {/* Recent section */}
          <div className="p-6 border-2 border-paper-300 animate-pulse">
            <div className="h-6 bg-paper-200 w-48 mb-4" />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-12 bg-paper-200/40 w-full" />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
