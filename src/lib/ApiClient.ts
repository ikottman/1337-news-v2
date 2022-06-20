export type Item = {
    by: string,
    descendants: number,
    id: number,
    time: number,
    title: string,
    type: string,
    url: string,
    score: number,
    kids: number[]
    text?: string,
    parent?: number,
  };

  function getPage(): number {
    const param = new URLSearchParams(window.location.search).get('page');
    if (param) {
      return Number.parseInt(param);
    }
    return 0;
  }
  
  function get(path: string): Promise<any> {
    return fetch(`https://hacker-news.firebaseio.com/v0/${path}`).then(r => r.json());
  }
  
  export function getItem(id: number | string): Promise<Item> {
    return get(`item/${id}.json`);
  }
  
  export function getItems(ids: number[], page: number, limit: number) {
    return Promise.all(ids.slice(page * limit, (page + 1) * limit).map(getItem))
      .then(data => data.filter(Boolean)); // filter deleted items
  }
  
  const ITEMS_PER_PAGE = 30;
  export function getStories(type: string) {
    const page = getPage();
    return get(`${type}stories.json`).then(ids => getItems(ids, page, ITEMS_PER_PAGE));
  }