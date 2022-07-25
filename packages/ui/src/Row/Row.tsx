import React, { forwardRef } from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { genInnerCls, useSx } from '@xifo/system';
import { Box, BoxProps } from '../Box';
import RowContext from './RowContext';

export interface RowProps extends BoxProps, React.ComponentPropsWithoutRef<'div'> {
  // 间距，单位为 px
  gutter?: number | [number, number];
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignContent'];
  grow?: boolean;
}

const innerCls = genInnerCls('row');

const RowRoot = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(prop) && !['sx', 'gutter'].includes(prop),
})<RowProps>((props) => {
  const { gutter, sx, justify, align } = props;
  const margin = gutter && { margin: typeof gutter === 'number' ? -gutter / 2 : -gutter[0] / 2 };

  return {
    display: 'flex',
    ...margin,
    flexWrap: 'wrap',
    justifyContent: justify,
    alignItems: align,
    ...sx
  };
});

const Row = forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const { children, gutter, grow, className, sx: outerSx, ...rest } = props;
  const sx = useSx(outerSx);

  return (
    <RowContext.Provider value={{ gutter: gutter || 0, grow: grow || false }}>
      <RowRoot ref={ref} className={classNames(innerCls, className)} sx={sx} {...rest}>
        {children}
      </RowRoot>
    </RowContext.Provider>
  );
});

export default Row;
