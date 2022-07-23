const defaultTheme = {
  // 默认白天模式
  mode: 'light',
  general: {
    sm: {
      fontSize: '0.8125rem',
      padding: '0px 8px',
    },
    md: {
      fontSize: '0.875rem',
      padding: '4px 16px',
    },
    lg: {
      fontSize: '0.9375rem',
      padding: '6px 20px',
    },
  },
  // 白天模式
  light: {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.45)',
      disabled: 'rgba(0, 0, 0, 0.08)',
    },
    primary: '#1890ff',
    error: '#f5222d',
    warning: '#faad14',
    success: '#52c41a',
    background: '#fff',
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  // 夜间模式
  dark: {
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    primary: '#0063cb',
    error: '#ba0004',
    warning: '#c27e00',
    success: '#009200',
    background: '#121212',
    divider: 'rgba(255, 255, 255, 0.12)',
  },
};

export default defaultTheme;
