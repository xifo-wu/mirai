import React, { CSSProperties, forwardRef, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { genInnerCls, Theme, useSx } from '@xifo/mirai-system';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  sx?: CSSProperties | ((theme: Theme) => CSSProperties);
}

const innerCls = genInnerCls('box');

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
  const { children, className, sx: outerSx, ...rest } = props;
  const sx = useSx(outerSx);

  return (
    <BoxRoot ref={ref} className={classNames(innerCls, className)} sx={sx} {...rest}>
      {children}
    </BoxRoot>
  );
});

export default Box;
