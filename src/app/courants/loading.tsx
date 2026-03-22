export default function CourantsLoading() {
  return (
    <div className="min-h-screen bg-paper-50">
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="w-20 h-8 bg-paper-200 animate-pulse" />
            <div className="w-52 h-8 bg-paper-200 animate-pulse" />
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-6 w-16 h-20 bg-paper-200 animate-pulse mx-auto" />
          <div className="w-56 h-10 bg-paper-200 animate-pulse mx-auto mb-4" />
          <div className="w-96 h-6 bg-paper-200/60 animate-pulse mx-auto max-w-full" />
        </div>

        <div className="content-2-3">
          {/* Period section skeleton */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="mb-16" style={{ animationDelay: `${i * 150}ms` }}>
              <div className="mb-8 p-6 bg-paper-200 border-2 border-paper-300 flex items-center gap-4 animate-pulse">
                <div className="w-16 h-16 bg-paper-100 border-2 border-paper-300" />
                <div className="flex-1">
                  <div className="h-8 bg-paper-100 w-40 mb-2" />
                  <div className="h-4 bg-paper-100/60 w-64" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="bg-paper-50 border-2 border-paper-300 p-6 animate-pulse">
                    <div className="h-6 bg-paper-200 w-3/4 mb-3" />
                    <div className="h-4 bg-paper-200/60 w-full mb-2" />
                    <div className="h-4 bg-paper-200/60 w-4/5 mb-4" />
                    <div className="h-3 bg-sepia-100 w-24" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
