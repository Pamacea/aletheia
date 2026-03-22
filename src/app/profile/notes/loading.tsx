export default function NotesLoading() {
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
        <div className="content-2-3 space-y-6">
          <div className="flex justify-between items-center">
            <div className="h-8 bg-paper-200 w-36 animate-pulse" />
            <div className="h-10 bg-sepia-100 w-40 animate-pulse" />
          </div>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="p-5 bg-paper-50 border-2 border-paper-300 animate-pulse" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="flex justify-between items-start mb-3">
                  <div className="h-5 bg-paper-200 w-1/2" />
                  <div className="h-4 bg-paper-200/60 w-20" />
                </div>
                <div className="h-4 bg-paper-200/60 w-full mb-1" />
                <div className="h-4 bg-paper-200/60 w-4/5" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
