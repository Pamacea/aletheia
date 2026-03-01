# Seed Testing & Verification

Quick reference for seed data verification and testing.

## Quick Start

```bash
# Verify database integrity
npm run db:verify

# Run automated tests
npm run test:seed

# Check file/DB consistency
npm run db:check-consistency
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run db:verify` | Basic verification of seed data |
| `npm run db:verify:full` | Detailed verification with statistics |
| `npm run test:seed` | Run Vitest test suite |
| `npm run db:check-consistency` | Check file/DB consistency |
| `npm run db:check-consistency:fix` | Check and attempt to fix issues |

## What Gets Checked

### Database Integrity (`db:verify`)

- ✅ Concepts have definitions, sources, relations
- ✅ Philosophers have biographies, dates, key ideas
- ✅ Movements have descriptions, periods, philosophers
- ✅ Sources have valid URLs and metadata
- ✅ Relations are valid (no self-references, valid strength)
- ✅ Categories are properly configured

### Automated Tests (`test:seed`)

- Unique slugs for all entities
- Valid dates and biographies
- Minimum required counts
- Quality metrics (90%+ completeness)
- No orphaned relationships
- Valid foreign key references

### File/DB Consistency (`db:check-consistency`)

- Files exist in database
- Database records have corresponding files
- No orphaned relationships
- No broken foreign key references

## Score Interpretation

After running `npm run db:verify`, you'll get a score (0-100):

- **90-100**: ✅ Excellent - Ready for production
- **70-89**: ⚠️ Good - Acceptable, some minor issues
- **50-69**: ❌ Fair - Needs attention
- **0-49**: 🚨 Poor - Critical issues

## Common Issues

### "Missing in database"

**Problem**: Data file exists but not seeded

**Solution**:
```bash
npm run db:seed
# Or specific seed:
npm run db:seed:philosophers
npm run db:seed:movements
```

### "Missing in files"

**Problem**: Database record without source file

**Solution**: Add data file or remove from DB via Prisma Studio

### "Orphaned records"

**Problem**: Relationships pointing to deleted entities

**Solution**:
```bash
npm run db:check-consistency -- --fix
```

### "Self-referential relations"

**Problem**: Concept relation to itself

**Solution**: Fix in `src/lib/concept-network/network.ts`

## Best Practices

1. **After seeding**: `npm run db:verify`
2. **Before commits**: `npm run test:seed`
3. **Regular checks**: `npm run db:check-consistency`
4. **CI/CD**: Include all three checks in pipeline

## CI/CD Integration

```yaml
# .github/workflows/test.yml
- name: Verify Seeds
  run: npm run db:verify

- name: Test Seeds
  run: npm run test:seed

- name: Check Consistency
  run: npm run db:check-consistency
```

## Documentation

- [Full Verification Guide](../prisma/seed/SEED_VERIFICATION.md)
- [Seeding Guide](../docs/SEEDING.md)
- [Data Structure](../docs/DATA_STRUCTURE.md)
