import * as React from 'react';
import { useTheme } from '@xifo/mirai-system';

const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 48 48" {...props}>
      <path
        fill={props.fill || theme[theme.mode!]?.text?.primary}
        d="M33.95 24.7 23.3 14.05 33.95 3.4 44.6 14.05ZM6 21.1V6.05h15.05V21.1ZM26.9 42V26.95h15.05V42ZM6 42V26.95h15.05V42Zm3-23.9h9.05V9.05H9Zm25.1 2.55 6.45-6.45-6.45-6.45-6.45 6.45ZM29.9 39h9.05v-9.05H29.9ZM9 39h9.05v-9.05H9Zm9.05-20.9Zm9.6-3.9Zm-9.6 15.75Zm11.85 0Z"
      />
    </svg>
  );
};

export default SVGComponent;
