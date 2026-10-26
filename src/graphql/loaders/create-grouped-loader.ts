import DataLoader from 'dataloader';

export function createGroupedLoader<K, R, V>(
  batch: (keys: readonly K[]) => Promise<readonly R[]>,
  toEntry: (row: R) => readonly [K, V],
): DataLoader<K, V[]> {
  return new DataLoader<K, V[]>(async (keys) => {
    const groups = new Map<K, V[]>();

    for (const row of await batch(keys)) {
      const [key, value] = toEntry(row);
      const group = groups.get(key);

      if (group) {
        group.push(value);
      } else {
        groups.set(key, [value]);
      }
    }

    return keys.map((key) => groups.get(key) ?? []);
  });
}
