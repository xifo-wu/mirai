import React, { ReactNode } from 'react';
import { DefaultProps, genInnerCls, useSx } from '@xifo/mirai-system';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import classNames from 'classnames';

const innerCls = genInnerCls('space');
const innerItemCls = genInnerCls('space-item');
const innerSplitCls = genInnerCls('space-split');

export interface SpaceProps extends DefaultProps {
  gutter?: number | [number, number];
  split?: ReactNode;
  wrap?: boolean;
  direction?: 'vertical' | 'horizontal';
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignContent'];
}

const SpaceRoot = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop) && !['sx', 'gutter'].includes(prop),
})<SpaceProps>((props) => {
  const { gutter = 8, direction = 'horizontal', align, justify, wrap, sx } = props;
  const gap = Array.isArray(gutter) ? `${gutter[0]}px ${gutter[1]}px` : gutter;

  return {
    display: 'flex',
    gap,
    alignItems: align,
    flexDirection: direction === 'vertical' ? 'column' : 'row',
    justifyContent: justify,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    ...sx,
  };
});

const SpaceItem = styled('div')();
const SpaceSplit = styled('div')();

const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const { children, split, className, sx: outerSx, ...rest } = props;
  const sx = useSx(outerSx);

  const childrenElements = React.Children.toArray(children).filter((child) =>
    React.isValidElement(child),
  ) as React.ReactElement[];

  const childrenElementsCount = childrenElements.length;

  return (
    <SpaceRoot ref={ref} className={classNames(innerCls, className)} sx={sx} {...rest}>
      {childrenElements.map((child, index) => {
        const key = (child && child.key) || `${innerItemCls}-${index}`;

        if (child === null || child === undefined) {
          return null;
        }

        return (
          <>
            <SpaceItem className={innerItemCls} key={key}>
              {child}
            </SpaceItem>
            {childrenElementsCount - 1 !== index && split && (
              <SpaceSplit className={innerSplitCls}>{split}</SpaceSplit>
            )}
          </>
        );
      })}
    </SpaceRoot>
  );
});

export default Space;
