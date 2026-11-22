// What I'm working on: shown on the home page and /now.
// The source of truth is the board (board.issa-tech.com). Its public tickets
// are published at /now.json, which the site reads at build time and again in
// the browser, so board changes appear without a redeploy.
// Safe to import in the browser: no Astro or Node APIs here.

export const STATES = ['backlog', 'ready', 'progress', 'test', 'done'] as const;
export type State = (typeof STATES)[number];

export const STATE_LABELS: Record<State, string> = {
  backlog: 'Backlog',
  ready: 'Ready for work',
  progress: 'In progress',
  test: 'In test',
  done: 'Done',
};

export interface NowItem {
  title: string;
  state: State;
  progress: number | null; // 0–100, or null when not tracked
  updated: string; // ISO date
}

export const NOW_URL = 'https://issa-tech.com/now.json';

/** Used only if the board's feed can't be reached when the site is built. */
export const fallbackNow: NowItem[] = [
  { title: 'Backlog board', state: 'progress', progress: 40, updated: '2026-11-22' },
  { title: 'Site redesign', state: 'done', progress: 100, updated: '2026-11-22' },
];

/** Validate the feed: anything malformed is dropped, never rendered. */
export function parseNow(raw: unknown): NowItem[] | null {
  if (!Array.isArray(raw)) return null;
  const items: NowItem[] = [];
  for (const r of raw as Record<string, unknown>[]) {
    if (!r || typeof r.title !== 'string' || !STATES.includes(r.state as State)) continue;
    const p = typeof r.progress === 'number' && r.progress >= 0 && r.progress <= 100 ? Math.round(r.progress) : null;
    items.push({ title: r.title.slice(0, 200), state: r.state as State, progress: p, updated: typeof r.updated === 'string' ? r.updated : '' });
  }
  return items;
}

export type NowFilter = 'all' | 'active' | 'done';

/** Most active first (in progress, in test, ready, backlog, done); newest first within a state. */
const displayOrder: State[] = ['progress', 'test', 'ready', 'backlog', 'done'];
export function selectNow(items: NowItem[], filter: NowFilter = 'all', limit?: number): NowItem[] {
  const picked = items
    .filter(i => filter === 'all' || (filter === 'done' ? i.state === 'done' : i.state !== 'done'))
    .sort((a, b) => displayOrder.indexOf(a.state) - displayOrder.indexOf(b.state) || b.updated.localeCompare(a.updated));
  return limit ? picked.slice(0, limit) : picked;
}

export const latestUpdate = (items: NowItem[]): string | undefined => items.map(i => i.updated).sort().at(-1);
