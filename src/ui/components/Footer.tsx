import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10 lg:py-12 bg-ink text-paper-200 border-t-2 border-sepia-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-6 mb-8">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-paper-50 font-serif mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              ΑΛΗΘΕΙΑ
            </h2>
            <p className="text-sepia-600 text-lg italic">
              La vérité dévoilée
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm" aria-label="Footer navigation">
            <Link
              href="/a-propos"
              className="text-paper-300 hover:text-sepia-600 transition-colors duration-200"
            >
              À propos
            </Link>
            <span className="text-paper-600">•</span>
            <Link
              href="/confidentialite"
              className="text-paper-300 hover:text-sepia-600 transition-colors duration-200"
            >
              Confidentialité
            </Link>
            <span className="text-paper-600">•</span>
            <Link
              href="/conditions"
              className="text-paper-300 hover:text-sepia-600 transition-colors duration-200"
            >
              Conditions d&apos;utilisation
            </Link>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-paper-700 text-center text-sm">
          <p className="text-paper-400 mb-2">
            © {currentYear} · Fait avec passion pour la philosophie
          </p>
          <p className="text-paper-500 text-xs">
            Propriété exclusive de Oalacea · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
