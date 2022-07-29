import { darken, useTheme } from "@xifo/mirai-system";
import * as React from "react";

const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => {
  const theme = useTheme();
  return <svg
    className="icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={128}
    height={128}
    {...props}
  >
    <path
      d="M365.76 0h292.48Q1024 0 1024 365.76v292.48Q1024 1024 658.24 1024H365.76Q0 1024 0 658.24V365.76Q0 0 365.76 0z"
      fill={theme.mode === 'dark' ? darken('#e1f5fe', 0.1) : '#e1f5fe'}
    />
    <path
      d="M512 237.44a199.36 199.36 0 0 0-95.04 374.72v84.48a66.08 66.08 0 0 0 69.6 61.92h50.88a66.08 66.08 0 0 0 69.6-61.92v-84.48A199.36 199.36 0 0 0 512 237.44z m29.12 484.32h-58.24a16.96 16.96 0 1 1 0-33.76h58.24a16.96 16.96 0 1 1 0 33.76z m0-54.4h-58.24a16.96 16.96 0 1 1 0-33.76h58.24a16.96 16.96 0 1 1 0 33.76z m92.64-215.36a16.8 16.8 0 0 1-16-16.96 113.28 113.28 0 0 0-1.6-18.08 104.96 104.96 0 0 0-62.88-79.04 16.96 16.96 0 0 1 13.12-31.2 138.88 138.88 0 0 1 83.04 104.48 132 132 0 0 1 2.08 23.84 16.8 16.8 0 0 1-17.76 16.96z"
      fill={theme.mode === 'dark' ? darken('#90caf9', 0.1) : '#90caf9'}
    />
  </svg>
};

export default SVGComponent;
