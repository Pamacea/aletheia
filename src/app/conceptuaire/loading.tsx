export default function ConceptuaireLoading() {
  return (
    <div className="min-h-screen bg-paper-50">
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="w-20 h-8 bg-paper-200 animate-pulse" />
            <div className="w-40 h-8 bg-paper-200 animate-pulse" />
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-72 h-10 bg-paper-200 animate-pulse mx-auto mb-3" />
          <div className="w-96 h-6 bg-paper-200/60 animate-pulse mx-auto max-w-full mb-8" />
          <div className="w-full max-w-3xl mx-auto h-12 bg-paper-200 animate-pulse mb-8" />
        </div>

        <div className="content-2-3">
          {/* Category filters skeleton */}
          <div className="mb-12 flex gap-3 justify-center flex-wrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-10 w-24 bg-paper-200 animate-pulse" />
            ))}
          </div>

          {/* Grid skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-48 bg-paper-50 border-2 border-paper-300 p-6 animate-pulse" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="h-4 bg-sepia-100 w-16 mb-3" />
                <div className="h-6 bg-paper-200 w-3/4 mb-3" />
                <div className="h-4 bg-paper-200/60 w-full mb-2" />
                <div className="h-4 bg-paper-200/60 w-4/5" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
