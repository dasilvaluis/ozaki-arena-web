import menu from 'settings/menu.json';

const trimSlashes = (word: string) => word.replace(/^\/|\/$/g, '');

const camelize = (s: string) => s.replace(/-./g, (x) => x[1].toUpperCase());

const routes: Record<string, string> = menu.entries.reduce((acc, curr) => ({
  ...acc,
  [camelize(trimSlashes(curr.path))]: curr.path
}), {});

export default routes;
