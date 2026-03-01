.PHONY: help seed-all cleanup verify db-studio dev build lint test

# Default target
help:
	@echo "Aletheia — Makefile Commands"
	@echo ""
	@echo "Seed commands:"
	@echo "  make seed-all      - Complete seed workflow (cleanup + seed)"
	@echo "  make cleanup       - Clean all text data"
	@echo "  make verify        - Verify database state"
	@echo "  make analyze       - Analyze data quality"
	@echo ""
	@echo "Development:"
	@echo "  make dev           - Start development server"
	@echo "  make build         - Build for production"
	@echo "  make db-studio     - Open Prisma Studio"
	@echo ""
	@echo "Quality:"
	@echo "  make lint          - Run ESLint"
	@echo "  make typecheck     - Run TypeScript checks"
	@echo "  make test          - Run tests"
	@echo "  make format        - Format code with Prettier"

# Seed complet
seed-all:
	@echo "🌱 Starting complete seed workflow..."
	@./scripts/seed-all.sh

# Nettoyage des données
cleanup:
	@echo "🧹 Cleaning text data..."
	@npm run cleanup:text

# Vérification
verify:
	@echo "🔍 Verifying database state..."
	@npm run db:verify

# Analyse
analyze:
	@echo "📊 Analyzing data quality..."
	@npm run db:seed:analyze

# Prisma Studio
db-studio:
	@npm run db:studio

# Développement
dev:
	@npm run dev

# Build
build:
	@npm run build

# Linting
lint:
	@npm run lint

# Typecheck
typecheck:
	@npm run typecheck

# Tests
test:
	@npm run test

# Format
format:
	@npm run format
