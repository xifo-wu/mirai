import React, { CSSProperties, ElementType, forwardRef, ReactNode } from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { genInnerCls, Theme, useSx } from '@xifo/system';

export interface BoxProps {
  children?: ReactNode;
  className?: string;
  component?: ElementType;
  sx?: CSSProperties | ((theme: Theme) => CSSProperties);
}

export const innerCls = genInnerCls('box');

const BoxRoot = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'sx',
})<BoxProps>((props) => {
  return {
    boxSizing: 'border-box',
    ...props.sx,
    ...props.style,
  };
});

const Box = forwardRef<HTMLDivElement, BoxProps>((props: BoxProps, ref) => {
  const { children, component, className, sx: outerSx, ...rest } = props;
  const sx = useSx(outerSx);
  const Element = component || BoxRoot;

  return (
    <Element ref={ref} className={classNames(innerCls, className)} sx={sx} {...rest}>
      {children}
    </Element>
  );
});

export default Box;
