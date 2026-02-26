import Link from "next/link";
import { BookOpenIcon, SearchIcon, UserIcon, LoginIcon } from "./CustomIcons";

interface NavigationProps {
  user?: {
    name?: string | null;
    email?: string | null;
  } | null;
}

export function Navigation({ user }: NavigationProps) {
  return (
    <nav className="border-b border-[#d9d6d0] bg-[#faf9f7] py-3 sm:py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[#8b6f3c] hover:text-[#6b552e] transition-colors"
          >
            <BookOpenIcon className="w-6 h-6" />
            <span className="font-serif text-xl font-semibold text-[#2d2b29]">
              ΑΛΗΘΕΙΑ
            </span>
          </Link>

          {/* Main Navigation */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-sm sm:text-base">
            <Link
              href="/conceptuaire"
              className="text-[#4a4744] hover:text-[#8b6f3c] transition-colors font-medium"
            >
              Conceptuaire
            </Link>
            <Link
              href="/graphe"
              className="text-[#4a4744] hover:text-[#8b6f3c] transition-colors font-medium"
            >
              Graphe
            </Link>
            <Link
              href="/citations"
              className="text-[#4a4744] hover:text-[#8b6f3c] transition-colors font-medium"
            >
              Citations
            </Link>
            <Link
              href="/philosophes"
              className="text-[#4a4744] hover:text-[#8b6f3c] transition-colors font-medium"
            >
              Philosophes
            </Link>
            <Link
              href="/courants"
              className="text-[#4a4744] hover:text-[#8b6f3c] transition-colors font-medium"
            >
              Courants
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center sm:justify-end gap-4">
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 text-[#2d2b29] hover:text-[#8b6f3c] transition-colors"
                >
                  <UserIcon className="w-5 h-5" />
                  <span className="hidden sm:inline">{user.name || 'Profil'}</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="flex items-center gap-2 px-4 py-2 text-[#faf9f7] bg-[#8b6f3c] hover:bg-[#6b552e] transition-colors"
                >
                  <LoginIcon className="w-4 h-4" />
                  <span>Connexion</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
