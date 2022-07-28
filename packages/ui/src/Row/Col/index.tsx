import React, { CSSProperties, forwardRef, useContext } from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { BREAKPOINTS, createTheme, genInnerCls, Theme } from '@xifo/mirai-system';
import { Box, BoxProps } from '../../Box';
import { RowProps } from '../Row';
import RowContext from '../RowContext';

export interface ColProps extends BoxProps, React.ComponentPropsWithoutRef<'div'> {
  span?: number;
  offset?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

// TODO 主题可配置
const maxColumns = 24;
const innerCls = genInnerCls('col');

// span 必须是数字且是整数、大于 0 小于 24
const isValidSpan = (span: number) => {
  return typeof span === 'number' && span > 0 && span <= maxColumns && span % 1 === 0;
};

const getPadding = (gutter: number | [number, number] | undefined) => {
  if (!gutter) {
    return undefined;
  }

  if (typeof gutter === 'number') {
    return gutter / 2;
  }

  return `${gutter[1]}px ${gutter[0]}px`;
};

const getOffset = (offset: number | undefined) => {
  return offset ? `${100 / (maxColumns / offset)}%` : undefined;
};

const getWidth = (span: number) => `${100 / (maxColumns / span)}%`;

interface GetBreakpointsType {
  theme: Theme;
  sizes: { offset?: number; xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  offset?: number;
  grow?: boolean;
}

const getBreakpoints = ({ theme, sizes, offset, grow }: GetBreakpointsType) => {
  return BREAKPOINTS.reduce<Record<string, CSSProperties>>((result, size) => {
    const innerSize = sizes[size];
    if (typeof innerSize === 'undefined') {
      return result;
    }

    const mediaWidth = theme.general!.breakpoints[size];

    if (innerSize === 0) {
      result[`@media (min-width: ${mediaWidth + 1}px)`] = {
        display: 'none',
      };
      return result;
    }

    result[`@media (min-width: ${mediaWidth + 1}px)`] = {
      flexBasis: getWidth(innerSize!),
      flexShrink: 0,
      maxWidth: grow ? 'unset' : getWidth(innerSize!),
      marginLeft: getOffset(offset),
      display: 'unset',
    };

    return result;
  }, {});
};

const ColRoot = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'span',
})<ColProps & Pick<RowProps, 'grow' | 'gutter'>>((props) => {
  const { xs, sm, md, lg, xl, theme: outerTheme, span, grow, gutter, offset } = props;
  const width = getWidth(span || maxColumns);
  const theme = createTheme(outerTheme);

  return {
    boxSizing: 'border-box',
    flexGrow: grow ? 1 : 0,
    flexShrink: 0,
    flexBasis: width,
    maxWidth: grow ? 'unset' : width,
    padding: getPadding(gutter),
    marginLeft: getOffset(offset),
    ...getBreakpoints({
      theme,
      sizes: { xs: xs, sm: sm, md: md, lg: lg, xl: xl },
      offset,
      grow,
    }),
    ...(xs === 0 && { display: 'none' }),
    ...(sm === 0 && { display: 'none' }),
    ...(md === 0 && { display: 'none' }),
    ...(lg === 0 && { display: 'none' }),
    ...(xl === 0 && { display: 'none' }),
  };
});

const Col = forwardRef<HTMLDivElement, ColProps>((props: ColProps, ref) => {
  const { className, sx, xs, sm, md, lg, xl, children, span: colSpan, offset, ...rest } = props;
  const { gutter, grow } = useContext(RowContext);
  const span = colSpan || maxColumns;

  if (!isValidSpan(span) || span > maxColumns) {
    return null;
  }

  return (
    <ColRoot
      gutter={gutter}
      grow={grow}
      ref={ref}
      span={span}
      className={classNames(innerCls, className)}
      sx={sx}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      {...rest}
    >
      {children}
    </ColRoot>
  );
});

export default Col;
