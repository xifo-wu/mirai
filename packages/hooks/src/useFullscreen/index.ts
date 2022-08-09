// const [isFullscreen, toggle] = useFullscreen();

import { useEffect, useState } from 'react';
import screenfull from 'screenfull';

export default function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    screenfull.on('change', () => {
      setIsFullscreen(screenfull.isFullscreen);
    });

    return () => {
      screenfull.off('change', function () {});
    };
  }, []);

  return [isFullscreen, () => screenfull.toggle()] as const;
}
