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
      fill={theme.mode === 'dark' ? darken('#FFF6F0', 0.1) : '#FFF6F0'}
    />
    <path
      d="M763.04 610.08l-3.68-3.36a49.12 49.12 0 0 1-14.72-33.76 48 48 0 0 1 13.12-34.24l3.52-3.36a20.48 20.48 0 0 0 4.8-20.64 170.24 170.24 0 0 0-9.92-18.72 119.04 119.04 0 0 0-11.52-17.6 20 20 0 0 0-19.84-5.6l-4.8 1.44a49.6 49.6 0 0 1-59.2-33.76l-1.12-4.8a20.8 20.8 0 0 0-15.04-13.76 118.24 118.24 0 0 0-21.28 0 155.04 155.04 0 0 0-21.12 0 20.32 20.32 0 0 0-14.72 14.24l-1.12 4.96a49.28 49.28 0 0 1-22.24 28.96 50.72 50.72 0 0 1-36.96 5.76l-4.64-0.96a20.16 20.16 0 0 0-19.68 5.92 180.64 180.64 0 0 0-11.52 18.56 153.28 153.28 0 0 0-9.44 18.4 20.48 20.48 0 0 0 5.28 20l3.68 3.36a49.6 49.6 0 0 1 0 68.16l-3.52 3.2a20 20 0 0 0-4.64 20 136.8 136.8 0 0 0 9.76 18.56 151.52 151.52 0 0 0 11.84 18.56 20.64 20.64 0 0 0 19.84 5.44l4.48-1.44a49.44 49.44 0 0 1 59.36 33.44l1.28 4.8a20.32 20.32 0 0 0 15.04 14.08 157.44 157.44 0 0 0 21.28 0 104.16 104.16 0 0 0 21.12-1.28 19.84 19.84 0 0 0 14.56-14.24l1.12-4.8a50.4 50.4 0 0 1 22.4-29.12 48.96 48.96 0 0 1 36-4.48l4.64 1.28a20.16 20.16 0 0 0 19.68-5.92 138.08 138.08 0 0 0 11.52-18.56 132.16 132.16 0 0 0 9.28-18.4 20.32 20.32 0 0 0-2.88-19.68z m-105.6 17.44a62.08 62.08 0 1 1 21.28-85.12 61.76 61.76 0 0 1-21.92 84.64z"
      fill={theme.mode === 'dark' ? darken('#FFA561', 0.1) : '#FFA561'}
    />
    <path
      d="M439.2 651.68a27.04 27.04 0 0 1 6.08-25.92l4.8-4.32a69.44 69.44 0 0 0 14.4-64h-122.72a36.64 36.64 0 0 1-35.68-36.96V353.76a36.8 36.8 0 0 1 35.68-36.96H704a36.96 36.96 0 0 1 35.68 36.96v89.76a93.76 93.76 0 0 0 9.28-1.6l6.24-1.92a26.08 26.08 0 0 1 19.84 2.4v-124.48a34.88 34.88 0 0 0-32-36.96H304a37.12 37.12 0 0 0-35.68 37.12v314.4A36.96 36.96 0 0 0 304 669.44h144a174.08 174.08 0 0 1-8.64-17.28z m108.8 60.16a65.44 65.44 0 0 0-48-6.72l-5.92 2.08a27.04 27.04 0 0 1-26.24-7.36 184.16 184.16 0 0 1-13.28-19.68 247.52 247.52 0 0 0-32 25.92c-16 0-27.68 8.16-27.68 18.56s12.48 18.56 27.68 18.56H576a64.8 64.8 0 0 0-28-32z"
      fill={theme.mode === 'dark' ? darken('#FFA561', 0.1) : '#FFA561'}
    />
  </svg>
};

export default SVGComponent;
