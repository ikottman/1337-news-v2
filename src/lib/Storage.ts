const STORAGE_KEY = '1337_news_ignoredItemIds';

export function getIgnoredItemIds() {
  return (localStorage.getItem(STORAGE_KEY) ?? '').split(',');
}

export function ignoreItem(id: string) {
  const currentItems = getIgnoredItemIds();
  // keep list from growing infinitely
  if (currentItems.length > 100) {
    currentItems.shift();
  }
  localStorage.setItem(STORAGE_KEY, [...currentItems, id].join(','))
}