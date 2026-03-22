export default function FlashcardsLoading() {
  return (
    <div className="min-h-screen bg-paper-50">
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="w-20 h-8 bg-paper-200 animate-pulse" />
            <div className="w-36 h-8 bg-paper-200 animate-pulse" />
            <div className="w-20" />
          </div>
        </div>
      </header>
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="content-2-3 space-y-6">
          <div className="flex justify-between items-center">
            <div className="h-8 bg-paper-200 w-48 animate-pulse" />
            <div className="h-10 bg-sepia-100 w-32 animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-40 bg-paper-50 border-2 border-paper-300 p-4 animate-pulse" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="h-4 bg-sepia-100 w-20 mb-3" />
                <div className="h-5 bg-paper-200 w-3/4 mb-2" />
                <div className="h-4 bg-paper-200/60 w-full mb-1" />
                <div className="h-4 bg-paper-200/60 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
