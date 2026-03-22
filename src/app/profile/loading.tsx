export default function ProfileLoading() {
  return (
    <div className="min-h-screen bg-paper-50">
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="w-20 h-8 bg-paper-200 animate-pulse" />
            <div className="w-32 h-8 bg-paper-200 animate-pulse" />
            <div className="w-20" />
          </div>
        </div>
      </header>
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="content-2-3 space-y-8">
          {/* Profile hero skeleton */}
          <div className="p-6 border-2 border-paper-300 animate-pulse">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-paper-200" />
              <div className="space-y-2">
                <div className="h-6 bg-paper-200 w-40" />
                <div className="h-4 bg-paper-200/60 w-56" />
              </div>
            </div>
            <div className="h-3 bg-paper-200/40 w-full rounded-full" />
          </div>
          {/* Tabs skeleton */}
          <div className="flex gap-4 border-b border-paper-300 pb-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-8 w-24 bg-paper-200 animate-pulse" />
            ))}
          </div>
          {/* Content skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-32 bg-paper-50 border-2 border-paper-300 p-4 animate-pulse">
                <div className="h-4 bg-paper-200 w-3/4 mb-2" />
                <div className="h-3 bg-paper-200/60 w-full mb-1" />
                <div className="h-3 bg-paper-200/60 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
