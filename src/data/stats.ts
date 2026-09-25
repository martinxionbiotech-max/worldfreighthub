/**
 * stats.ts — Single Source of Truth for homepage count claims (P0-2).
 *
 * Every figure below is derived from the actual data files (or actual page
 * files for guides) at build time. Nothing is hardcoded: if content changes,
 * the counts change with it — no stale marketing numbers.
 *
 * Definitions:
 *   routes        — routes.ts (China → GCC corridor route matrix)
 *   ports         — gcc-ports.ts + europe/europe-ports.ts (port profiles)
 *   providers     — directory.ts + europe/europe-directory.ts (verified directory)
 *   guides        — corridor guide pages: every .astro page directly under
 *                   src/pages/middleeast/ and src/pages/europe/, excluding the
 *                   hub index pages and europe/data (a data table, not a guide)
 *   countries     — gcc-countries.ts + europe/europe-countries.ts
 *   glossaryTerms — glossary.ts (main GCC freight & customs glossary)
 */
import { routes } from './routes';
import { gccPorts } from './gcc-ports';
import { chinaPorts } from './china-ports';
import { europePorts } from './europe/europe-ports';
import { directoryProviders } from './directory';
import { europeDirectoryProviders } from './europe/europe-directory';
import { gccCountries } from './gcc-countries';
import { europeCountries } from './europe/europe-countries';
import { glossary } from './glossary';

const middleEastGuidePages = Object.keys(
  import.meta.glob('/src/pages/middleeast/*.astro'),
).filter((p) => !p.endsWith('/index.astro'));

const europeGuidePages = Object.keys(
  import.meta.glob('/src/pages/europe/*.astro'),
).filter((p) => !p.endsWith('/index.astro') && !p.endsWith('/data.astro'));

export const stats = {
  routes: routes.length,
  gccPorts: gccPorts.length,
  chinaPorts: chinaPorts.length,
  europePorts: europePorts.length,
  ports: gccPorts.length + europePorts.length,
  gccProviders: directoryProviders.length,
  europeProviders: europeDirectoryProviders.length,
  providers: directoryProviders.length + europeDirectoryProviders.length,
  guides: middleEastGuidePages.length + europeGuidePages.length,
  gccCountries: gccCountries.length,
  europeCountries: europeCountries.length,
  countries: gccCountries.length + europeCountries.length,
  glossaryTerms: glossary.length,
} as const;

/** Derived ratios used in TL;DR copy (recomputed, never hardcoded). */
export const derivedStats = {
  guidesPerPort: stats.ports > 0 ? (stats.guides / stats.ports).toFixed(1) : '—',
  providersPerRoute: stats.routes > 0 ? (stats.providers / stats.routes).toFixed(1) : '—',
} as const;
