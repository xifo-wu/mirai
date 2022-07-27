export default function genInnerCls (className: string, prefix = 'mirai') {
  return `${prefix}-${className}`;
}
