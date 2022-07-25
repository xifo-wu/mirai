import defaultsDeep from 'lodash.defaultsdeep';
import defaultTheme from './defaultTheme';

// 包含了系统默认主题
export default function mergeTheme(theme: any, ...args: any[]) {
  const mergedTheme = defaultsDeep(theme, ...args, defaultTheme);

  return mergedTheme;
}
