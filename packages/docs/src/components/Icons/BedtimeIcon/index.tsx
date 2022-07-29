import * as React from 'react';

const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height={24} width={24} {...props}>
    <path
      fill={props.fill || "#fff"}
      d="M24 41q2.8 0 5.8-1.15t5.7-3.4q-4.9-1.7-8.45-4.575-3.55-2.875-5.625-6.65-2.075-3.775-2.65-8.25-.575-4.475.475-9.325-5.55 2.05-8.9 6.325Q7 18.25 7 24q0 7.2 4.9 12.1Q16.8 41 24 41Zm0 3q-4.2 0-7.85-1.55Q12.5 40.9 9.8 38.2q-2.7-2.7-4.25-6.35Q4 28.2 4 24q0-4 1.55-7.625T9.8 10q2.7-2.75 6.3-4.375Q19.7 4 23.8 4q-2.45 4.75-2.3 10.025.15 5.275 2.55 9.7 2.4 4.425 6.8 7.4 4.4 2.975 10.45 3.125-2.6 4.1-7.35 6.925T24 44Zm-2.75-19.7Z"
    />
  </svg>
);

export default SVGComponent;
