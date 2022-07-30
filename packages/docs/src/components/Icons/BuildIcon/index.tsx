import * as React from 'react';
import { useTheme } from '@xifo/mirai-system';
const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 48 48" {...props}>
      <path
        fill={props.fill || theme[theme.mode!]?.text?.primary}
        d="m35.25 41.6-12.9-13q-1.15.4-2.3.65t-2.35.25q-4.85 0-8.25-3.375-3.4-3.375-3.4-8.225 0-1.55.4-3.025.4-1.475 1.15-2.775l7.25 7.25 4.6-4.3L12 7.6q1.3-.75 2.75-1.175Q16.2 6 17.7 6q4.95 0 8.425 3.475Q29.6 12.95 29.6 17.9q0 1.2-.25 2.35-.25 1.15-.65 2.3l12.95 12.9q.55.55.55 1.325 0 .775-.55 1.325l-3.8 3.5q-.55.55-1.3.55t-1.3-.55Zm1.4-2.85 2-2L25 23.1q.8-1.05 1.2-2.475.4-1.425.4-2.725 0-3.75-2.775-6.35Q21.05 8.95 17.5 8.9l5.05 5.15q.45.45.45 1.1 0 .65-.45 1.1l-6.6 6.2q-.45.45-1.1.45-.65 0-1.1-.45l-4.85-4.8q.15 3.85 2.725 6.35 2.575 2.5 6.075 2.5 1.25 0 2.65-.4t2.45-1.2ZM23.8 23.8Z"
      />
    </svg>
  );
};

export default SVGComponent;
