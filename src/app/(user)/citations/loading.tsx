export default function CitationsLoading() {
  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header skeleton */}
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
        {/* Hero skeleton */}
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-paper-200 animate-pulse rounded-full" />
          </div>
          <div className="w-64 h-10 bg-paper-200 animate-pulse mx-auto mb-3" />
          <div className="w-96 h-6 bg-paper-200/60 animate-pulse mx-auto max-w-full" />
          <div className="mt-6 flex justify-center gap-8">
            <div className="w-32 h-10 bg-paper-200 animate-pulse border-2 border-paper-300" />
            <div className="w-32 h-10 bg-paper-200 animate-pulse border-2 border-paper-300" />
          </div>
        </div>

        {/* Content */}
        <div className="content-2-3">
          {/* Search skeleton */}
          <div className="mb-8 p-6 bg-paper-200 border-2 border-paper-300">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 h-12 bg-paper-100 animate-pulse" />
              <div className="w-48 h-12 bg-paper-100 animate-pulse" />
            </div>
          </div>

          {/* Quote cards skeleton */}
          <div className="space-y-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="p-8 bg-paper-50 border-2 border-paper-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-paper-200 animate-pulse rounded flex-shrink-0" />
                  <div className="flex-1 space-y-3">
                    <div className="h-5 bg-paper-200 animate-pulse w-full" />
                    <div className="h-5 bg-paper-200 animate-pulse w-4/5" />
                    <div className="h-5 bg-paper-200/60 animate-pulse w-3/5" />
                    <div className="flex justify-between mt-4">
                      <div className="h-4 bg-sepia-100 animate-pulse w-40" />
                      <div className="h-4 bg-paper-200 animate-pulse w-16" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
