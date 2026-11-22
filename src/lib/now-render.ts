// Renders Now list items to HTML. Used both at build time (NowList.astro) and
// in the browser when the live feed arrives, so the two can never drift apart.
import { STATE_LABELS, type NowItem } from '../data/now';

const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export function formatNowDate(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function renderNowItems(items: NowItem[], detailed: boolean, empty: string): string {
  if (items.length === 0) return empty ? `<li class="now-empty">${esc(empty)}</li>` : '';
  return items.map(item => {
    const p = item.progress;
    const date = formatNowDate(item.updated);
    // item.state is validated against the fixed list, so it's safe in a style value
    return `<li>
      <div class="row"><span class="title">${esc(item.title)}</span><span class="stage" style="--c: var(--st-${item.state})">${STATE_LABELS[item.state]}</span></div>
      ${p !== null ? `<div class="bar" role="progressbar" aria-label="${esc(item.title)} progress" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><i style="width: ${p}%; --c: var(--st-${item.state})"></i></div>` : ''}
      ${detailed ? `<div class="meta"><span class="label">${p !== null ? `${p}%` : ''}${p !== null && date ? ' · ' : ''}${date ? `updated ${date}` : ''}</span></div>` : ''}
    </li>`;
  }).join('');
}
