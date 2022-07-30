import React, { useContext } from 'react';
import { useTheme } from '@xifo/mirai-system';
import ColorModeContext from '@/ColorModeContext';
import BedtimeIcon from '../Icons/BedtimeIcon';
import SunnyIcon from '../Icons/SunnyIcon';

const ChangeThemeMode = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return theme.mode === 'light' ? (
    <BedtimeIcon style={{ cursor: 'pointer' }} fill="#333" onClick={colorMode.toggleColorMode} />
  ) : (
    <SunnyIcon style={{ cursor: 'pointer' }} onClick={colorMode.toggleColorMode} />
  );
};

export default ChangeThemeMode;
