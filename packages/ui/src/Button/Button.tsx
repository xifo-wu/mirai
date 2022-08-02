import React, { CSSProperties, forwardRef, HTMLAttributes, ReactNode } from 'react';
import {
  alpha,
  createTheme,
  darken,
  DefaultProps,
  genInnerCls,
  lighten,
  Theme,
  useSx,
} from '@xifo/mirai-system';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import classNames from 'classnames';
import LoadingComponent from './Loading';

type Color = string | 'primary' | 'warning' | 'danger';
type Variant = 'outline' | 'light' | 'default' | 'filled' | 'link' | 'gradient';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Radius = Size;
type Gradient = {
  from: string;
  to: string;
  deg?: number;
};

const sizeStyle: Record<Size, CSSProperties> = {
  xs: {
    padding: '0px 14px',
    height: 30,
    borderRadius: 2,
    fontSize: 12,
  },
  sm: {
    padding: '0px 18px',
    height: 36,
    borderRadius: 4,
    fontSize: 14,
  },
  md: {
    padding: '0px 22px',
    height: 42,
    borderRadius: 8,
    fontSize: 16,
  },
  lg: {
    padding: '0px 26px',
    height: 50,
    borderRadius: 16,
    fontSize: 18,
  },
  xl: {
    padding: '0px 32px',
    height: 60,
    borderRadius: 32,
    fontSize: 20,
  },
};

export interface ButtonProps extends DefaultProps, HTMLAttributes<HTMLButtonElement> {
  color?: Color;
  size?: Size;
  radius?: Radius;
  variant?: Variant;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  // TODO TS支持 variant 为 gradient 必填
  gradient?: Gradient;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const innerCls = genInnerCls('button');

// 根据字符串获取颜色
const getColor = (color: string, theme: Theme) => {
  if (color === 'primary') {
    return theme[theme.mode!]!.primary!;
  }

  if (color === 'warning') {
    return theme[theme.mode!]!.warning!;
  }

  if (color === 'danger') {
    return theme[theme.mode!]!.error!;
  }

  return color;
};

const getVariantStyles = (
  variant: Variant,
  theme: Theme,
  outerColor: Color,
  gradient?: Gradient,
) => {
  const color = getColor(outerColor, theme);
  const isDark = theme.mode === 'dark';
  const modeTheme = theme[theme.mode!];

  if (variant === 'light') {
    return {
      border: 'transparent',
      color: isDark ? darken(color, 0.02) : color,
      background: alpha(color, 0.15),
      [`&:not(.${innerCls}-disabled, .${innerCls}-loading):hover`]: {
        background: isDark ? alpha(color, 0.25) : alpha(color, 0.19),
      },
      [`&.${innerCls}-loading`]: {
        cursor: 'not-allowed',
        backgroundColor: alpha(color, 0.3),
      },
    };
  }

  if (variant === 'outline') {
    return {
      border: `1px solid ${color}`,
      color: color,
      background: 'transparent',
      [`&:not(.${innerCls}-disabled, .${innerCls}-loading):hover`]: {
        background: isDark ? alpha(color, 0.25) : alpha(color, 0.15),
      },
      [`&.${innerCls}-loading`]: {
        cursor: 'not-allowed',
        backgroundColor: isDark ? alpha(color, 0.15) : alpha(color, 0.05),
      },
    };
  }

  if (variant === 'link') {
    return {
      border: 'transparent',
      color: color,
      background: 'transparent',
      [`&:not(.${innerCls}-disabled, .${innerCls}-loading):hover`]: {
        background: isDark ? alpha(color, 0.2) : alpha(color, 0.1),
      },
      [`&.${innerCls}-loading`]: {
        cursor: 'not-allowed',
        backgroundColor: isDark ? alpha(color, 0.15) : alpha(color, 0.05),
      },
    };
  }

  if (variant === 'default') {
    return {
      border: `1px solid ${modeTheme?.text?.primary}`,
      background: modeTheme?.background,
      color: modeTheme?.text?.primary || '#121212',
      [`&:not(.${innerCls}-disabled, .${innerCls}-loading):hover`]: {
        background: isDark ? alpha('#fff', 0.1) : alpha('#121212', 0.05),
      },
      [`&.${innerCls}-loading`]: {
        cursor: 'not-allowed',
        background: isDark ? alpha('#fff', 0.08) : alpha('#121212', 0.04),
      },
    };
  }

  if (variant === 'gradient') {
    const merged = {
      from: gradient?.from || '#1c7ed6 ',
      to: gradient?.to || '#22b8cf',
      deg: gradient?.deg || 45,
    };

    return {
      background: `linear-gradient(${merged.deg}deg, ${merged.from} 0%, ${merged.to} 100%)`,
      color: '#fff',
      border: 'transparent',
      [`&:not(.${innerCls}-disabled, .${innerCls}-loading):hover`]: {
        backgroundSize: '200%',
      },
      [`&.${innerCls}-loading`]: {
        cursor: 'not-allowed',
      },
    };
  }

  // 默认其他情况
  return {
    border: 'transparent',
    color: '#fff',
    background: color,
    [`&:not(.${innerCls}-disabled, .${innerCls}-loading):hover`]: {
      background: darken(color, 0.1),
    },
    [`&.${innerCls}-loading`]: {
      background: lighten(color, 0.1),
    },
  };
};

interface ButtonBaseProps extends ButtonProps {
  variant: Variant;
  color: Color;
  size: Size;
}

const ButtonBase = styled('button', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'color' && prop !== 'variant' && prop !== 'loading',
})<ButtonBaseProps>((props) => {
  const {
    gradient,
    disabled,
    size,
    variant,
    color,
    sx,
    fullWidth,
    theme: outerTheme,
    radius = 'xs',
  } = props;
  const theme = createTheme(outerTheme);

  return {
    display: fullWidth ? 'block' : 'inline-block',
    width: fullWidth ? '100%' : 'auto',
    flexGrow: 0,
    fontWeight: 600,
    position: 'relative',
    userSelect: 'none',
    boxSizing: 'border-box',
    textDecoration: 'none',
    cursor: 'pointer',
    lineHeight: 1,
    letterSpacing: '0.02857em',
    ...getVariantStyles(variant, theme, color, gradient),
    fontSize: sizeStyle[size].fontSize,
    padding: sizeStyle[size].padding,
    height: sizeStyle[size].height,
    borderRadius: sizeStyle[radius].borderRadius,
    ...(disabled && {
      borderColor: 'transparent',
      backgroundColor: 'rgb(233, 236, 239)',
      color: 'rgb(173, 181, 189)',
      cursor: 'not-allowed',
    }),
    [`&:not(.${innerCls}-disabled, .${innerCls}-loading):active`]: {
      transform: 'translateY(1px)',
    },
    '@media print': {
      colorAdjust: 'exact',
    },
    ...sx,
  };
});

const ButtonInnerBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  overflow: 'visible',
});

const LeftIconBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginRight: 8,
});

const RightIconBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 8,
});

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
}
`;

const Loading = styled(LoadingComponent)((props) => ({
  animation: `${loading} 0.8s infinite linear`,
}));

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    color = 'primary',
    variant = 'filled',
    children,
    className,
    sx: outerSx,
    size = 'md',
    disabled = false,
    loading = false,
    onClick,
    leftIcon,
    rightIcon,
    ...rest
  } = props;
  const sx = useSx(outerSx);

  function handleClick(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  }

  const iconWidth = sizeStyle[size].height as number

  return (
    <ButtonBase
      {...rest}
      ref={ref}
      sx={sx}
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      loading={loading}
      className={classNames(
        innerCls,
        {
          [`${innerCls}-${color}`]: !!color,
          [`${innerCls}-${size}`]: !!size,
          [`${innerCls}-disabled`]: disabled,
          [`${innerCls}-loading`]: loading,
        },
        className,
      )}
      onClick={handleClick}
    >
      <ButtonInnerBox className={`${innerCls}-inner-box`}>
        {(leftIcon || loading) && (
          <LeftIconBox className={`${innerCls}-left-icon-box`}>
            {loading ? (
              <Loading width={iconWidth / 2} height={iconWidth / 2} />
            ) : (
              leftIcon
            )}
          </LeftIconBox>
        )}
        {children}
        {rightIcon && (
          <RightIconBox className={`${innerCls}-right-icon-box`}>{rightIcon}</RightIconBox>
        )}
      </ButtonInnerBox>
    </ButtonBase>
  );
});

export default Button;
