import { darken, useTheme } from '@xifo/mirai-system';
import * as React from 'react';

const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => {
  const theme = useTheme();

  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={128}
      height={128}
      {...props}
    >
      <path
        d="M365.92 2.72h292.16Q1024 2.72 1024 366.4v291.2q0 363.68-365.28 363.68h-292.8Q0 1021.28 0 657.6V366.4Q0 2.88 365.92 2.72z"
        fill={theme.mode === 'dark' ? darken('#E3FFEE', 0.1) : '#E3FFEE'}
      />
      <path
        d="M438.88 280.64h-109.44a48 48 0 0 0-48.8 48.8v109.44a48 48 0 0 0 48.8 48.8h109.44a48 48 0 0 0 48.8-48.8v-109.44a48 48 0 0 0-48.8-48.8z m256 0h-109.76a48 48 0 0 0-48 48.8v109.44a48 48 0 0 0 48 48.8h109.44a48 48 0 0 0 48.8-48.8v-109.44a48.96 48.96 0 0 0-48.8-48.8z m-256 256h-109.44a48 48 0 0 0-48.8 48v109.44a48 48 0 0 0 48.8 48.8h109.44a48 48 0 0 0 48.8-48.8v-108.96a48 48 0 0 0-48.8-48.8z m256 0h-109.76a48 48 0 0 0-48 48v109.44a48 48 0 0 0 48 48.8h109.44a48 48 0 0 0 48.8-48.8v-108.96a48.96 48.96 0 0 0-48.8-48.8z"
        fill={theme.mode === 'dark' ? darken('#5CE092', 0.1) : '#5CE092'}
      />
    </svg>
  );
};

export default SVGComponent;
