import * as React from 'react';
import { useTheme } from '@xifo/mirai-system';
const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 48 48" {...props}>
      <path
        fill={props.fill || theme[theme.mode!]?.text?.primary}
        d="M22 42q-5 0-8.5-3.5T10 30V19.2l8.8 8.8-2.1 2.15-3.7-3.7V30q0 3.75 2.65 6.375T22 39q3.75 0 6.375-2.625T31 30v-6.7q-1.75-.55-2.875-2.025Q27 19.8 27 18q0-1.8 1.125-3.275Q29.25 13.25 31 12.7V4h3v8.7q1.75.55 2.875 2.025Q38 16.2 38 18q0 1.8-1.125 3.3-1.125 1.5-2.875 2V30q0 5-3.5 8.5T22 42Zm10.5-21.5q1.05 0 1.775-.75Q35 19 35 18q0-1.05-.725-1.775-.725-.725-1.775-.725-1 0-1.75.725T30 18q0 1 .75 1.75t1.75.75Z"
      />
    </svg>
  );
};

export default SVGComponent;
