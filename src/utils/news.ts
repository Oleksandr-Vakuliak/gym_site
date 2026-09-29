// Shared bits for the news list and article pages.
export const kindLabel = { news: 'Новина', event: 'Подія' } as const;

export const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('uk-UA', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(d)
    .replace(/\s?р\.$/, '');
