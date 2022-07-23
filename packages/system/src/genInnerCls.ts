export default function genInnerCls (className: string, prefix = 'xifo') {
  return `${prefix}-${className}`;
}
