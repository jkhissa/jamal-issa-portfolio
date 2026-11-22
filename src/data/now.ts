// What I'm working on: shown on the home page and /now.
// Same states, labels and shape as the board's public feed (now.json), so the
// board can replace this hand-written list without changing the components.

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

export const now: NowItem[] = [
  { title: 'Backlog board', state: 'progress', progress: 40, updated: '2026-11-22' },
  { title: 'Raspberry Pi storage server', state: 'backlog', progress: 25, updated: '2026-11-22' },
  { title: 'Site redesign', state: 'done', progress: 100, updated: '2026-11-22' },
  { title: 'LinkedIn → site content refresh', state: 'done', progress: 100, updated: '2026-11-22' },
];

/** Most active first: what's being worked on, then what's next, then done. */
export const displayOrder: State[] = ['progress', 'test', 'ready', 'backlog', 'done'];
export const byActivity = (a: NowItem, b: NowItem) => displayOrder.indexOf(a.state) - displayOrder.indexOf(b.state);
