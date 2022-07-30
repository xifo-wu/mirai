import { ReactNode } from 'react';
import { Typography } from '@xifo/mirai-ui';

const WebsiteTitle = ({ children }: { children: ReactNode }) => (
  <Typography
    type="lgTitle"
    sx={{
      background: 'linear-gradient(to right, #1c7ed6 15%, #22b8cf 100%)',
      fontWeight: 'bold',
      fontSize: 75,
      letterSpacing: 4,
      textTransform: 'capitalize',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    {children}
  </Typography>
);
export default WebsiteTitle;
