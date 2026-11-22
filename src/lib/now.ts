// Build-time: read the board's public feed so the generated HTML is current
// as of the last deploy. The browser refreshes it again on every visit.
import { NOW_URL, fallbackNow, parseNow, type NowItem } from '../data/now';

let cached: Promise<NowItem[]> | undefined;

export function getNow(): Promise<NowItem[]> {
  return (cached ??= load());
}

async function load(): Promise<NowItem[]> {
  try {
    const res = await fetch(NOW_URL, { signal: AbortSignal.timeout(5000) });
    if (res.ok) {
      const items = parseNow(await res.json());
      if (items) return items;
    }
    console.warn(`[now] ${NOW_URL} returned ${res.status}; using the fallback list`);
  } catch (err) {
    console.warn(`[now] couldn't reach ${NOW_URL} (${(err as Error).message}); using the fallback list`);
  }
  return fallbackNow;
}
