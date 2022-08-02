export const variantCode = `import React from 'react';
import { Box, Button } from '@xifo/mirai-ui';

export default function Page () {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
      }}
    >
      <Button variant="filled">Filled</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="light">Light</Button>
      <Button variant="default">Default</Button>
      <Button variant="gradient">Gradient</Button>
      <Button variant="link">Link</Button>
    </Box>
  )
}`;

export const colorCode = `import React from 'react';
import { Box, Button } from '@xifo/mirai-ui';

export default function Page () {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
      }}
    >
      <Button color="primary">Primary</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
      <Button color="#13C2C2">#13C2C2</Button>
      <Button color="rgb(224, 60, 138)">rgb(224, 60, 138)</Button>
      <Button color="rgba(119, 66, 148, 0.9)">rgba(119, 66, 148, 0.9)</Button>
    </Box>
  )
}`;

export const sizeCode = `import React from 'react';
import { Box, Button } from '@xifo/mirai-ui';

export default function Page () {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
      }}
    >
      <Button size="xs">xs</Button>
      <Button size="sm">sm</Button>
      <Button size="md">md</Button>
      <Button size="lg">lg</Button>
      <Button size="xl">xl</Button>
    </Box>
  )
}`;

export const radiusCode = `import React from 'react';
import { Box, Button } from '@xifo/mirai-ui';

export default function Page () {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
      }}
    >
      <Button radius="xs">xs</Button>
      <Button radius="sm">sm</Button>
      <Button radius="md">md</Button>
      <Button radius="lg">lg</Button>
      <Button radius="xl">xl</Button>
    </Box>
  )
}`;

export const gradientCode = `import React from 'react';
import { Box, Button } from '@xifo/mirai-ui';

export default function Page () {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
      }}
    >
      <Button variant="gradient" gradient={{ from: '#FC5C7D', to: '#6A82FB', deg: 0 }}>
        #FC5C7D to #6A82FB
      </Button>
    </Box>
  )
}`;
