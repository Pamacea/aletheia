export default function AgoraLoading() {
  return (
    <div className="min-h-screen bg-paper-50">
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="w-20 h-8 bg-paper-200 animate-pulse" />
            <div className="w-24 h-8 bg-paper-200 animate-pulse" />
            <div className="w-20" />
          </div>
        </div>
      </header>
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-6 w-16 h-16 bg-paper-200 animate-pulse mx-auto rounded-full" />
          <div className="w-64 h-10 bg-paper-200 animate-pulse mx-auto mb-3" />
          <div className="w-96 h-6 bg-paper-200/60 animate-pulse mx-auto max-w-full" />
        </div>
        <div className="content-2-3">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-4">
              {/* Search bar */}
              <div className="h-12 bg-paper-200 animate-pulse w-full" />
              {/* Post cards */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="p-6 bg-paper-50 border-2 border-paper-300 animate-pulse" style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-paper-200 rounded-full flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-5 bg-paper-200 w-3/4" />
                      <div className="h-4 bg-paper-200/60 w-full" />
                      <div className="h-3 bg-paper-200/40 w-1/3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Sidebar */}
            <div className="w-full lg:w-80 space-y-6">
              <div className="p-5 border-2 border-paper-300 animate-pulse">
                <div className="h-5 bg-paper-200 w-40 mb-4" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-8 bg-paper-200/60 w-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
