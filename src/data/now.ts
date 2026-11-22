// What I'm working on: shown on the home page and /now.
// Edit by hand for now; later this can be generated from the backlog board
// (public items only).

export type Stage = 'backlog' | 'planning' | 'execution' | 'testing' | 'done';

export interface NowItem {
  title: string;
  stage: Stage;
  progress: number; // 0–100
  note?: string;
  updated: string; // YYYY-MM-DD
}

export const now: NowItem[] = [
  { title: 'Site redesign & writing section', stage: 'execution', progress: 60, updated: '2026-11-22',
    note: 'New design with a writing section, profile page and this Now page.' },
  { title: 'Backlog board', stage: 'planning', progress: 15, updated: '2026-11-22',
    note: 'A small self-hosted kanban board with stages and progress bars.' },
  { title: 'Raspberry Pi storage server', stage: 'planning', progress: 25, updated: '2026-11-22',
    note: 'Home storage and backups with mixed drive sizes.' },
  { title: 'LinkedIn → site content refresh', stage: 'done', progress: 100, updated: '2026-11-22' },
];

export const stageOrder: Stage[] = ['execution', 'testing', 'planning', 'backlog', 'done'];
