import defaultsDeep from 'lodash.defaultsdeep';
import defaultTheme from './defaultTheme';

export default function mergeTheme(theme: any, ...args: any[]) {
  const mergedTheme = defaultsDeep(theme, ...args, defaultTheme);

  return mergedTheme;
}
