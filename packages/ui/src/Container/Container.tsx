import React, { CSSProperties, forwardRef, ReactNode } from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import classNames from 'classnames';
import { createTheme, genInnerCls, Theme, useSx } from '@xifo/mirai-system';

export interface ContainerProps {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  sx?: CSSProperties | ((theme: Theme) => CSSProperties);
  children?: ReactNode;
}

const innerCls = genInnerCls('container');

const ContainerRoot = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<ContainerProps>((props) => {
  const { theme: outerTheme, sx, maxWidth: containerMaxWidth, style } = props;
  const theme = createTheme(outerTheme);

  const maxWidth =
    containerMaxWidth &&
    (typeof containerMaxWidth === 'number'
      ? containerMaxWidth
      : theme.general!.breakpoints[containerMaxWidth]);

  return {
    width: '100%',
    boxSizing: 'border-box',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 16px',
    maxWidth,
    ...sx,
    ...style,
  };
});

const Container = forwardRef<HTMLDivElement, ContainerProps>((props: ContainerProps, ref) => {
  const { children, className, sx: outerSx, maxWidth = 'lg', ...rest } = props;
  const sx = useSx(outerSx);

  return (
    <ContainerRoot ref={ref} maxWidth={maxWidth} className={classNames(innerCls, className)} sx={sx} {...rest}>
      {children}
    </ContainerRoot>
  );
});

export default Container;
