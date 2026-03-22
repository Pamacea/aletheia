export default function PhilosophesLoading() {
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
        <div className="text-center mb-12">
          <div className="mb-6 w-16 h-16 bg-paper-200 animate-pulse mx-auto rounded-full" />
          <div className="w-64 h-10 bg-paper-200 animate-pulse mx-auto mb-3" />
          <div className="w-80 h-6 bg-paper-200/60 animate-pulse mx-auto max-w-full" />
        </div>

        <div className="content-2-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-paper-50 border-2 border-paper-300 p-6 animate-pulse" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-paper-200 border-2 border-paper-300" />
                  <div>
                    <div className="h-5 bg-paper-200 w-28 mb-1" />
                    <div className="h-3 bg-paper-200/60 w-20" />
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  <div className="h-6 bg-sepia-100 w-16" />
                  <div className="h-6 bg-sepia-100 w-20" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-3 bg-paper-200/60 w-full" />
                  <div className="h-3 bg-paper-200/60 w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
