import * as React from 'react';
import styled from '@emotion/styled';
import { DefaultProps, genInnerCls } from '@xifo/mirai-system';
import classNames from 'classnames';

const innerCls = genInnerCls('divider');

export interface DividerProps extends DefaultProps {
  // 是否是虚线
  dashed?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  type?: 'horizontal' | 'vertical';
}

const DividerBase = styled.div<DividerProps>((props) => {
  const mode = props.theme.mode || 'light';
  const theme = props.theme[mode];
  const color = theme?.text?.primary || '#fff';
  const borderColor = theme?.divider || 'rgba(0, 0, 0, .06)';

  return {
    color,
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    fontSize: 14,
    fontVariant: 'tabular-nums',
    lineHeight: 1.5715,
    listStyle: 'none',
    fontFeatureSettings: 'tnum',
    borderTop: `1px solid ${borderColor}`,
    [`&.${innerCls}-vertical`]: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: '0',
      borderWidth: '0',
      borderStyle: 'solid',
      borderColor: borderColor,
      borderBottomWidth: '0',
      borderRightWidth: 'thin',
      alignSelf: 'stretch',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      margin: '0 16px',
      [`&.${innerCls}-with-text`]: {
        margin: '0 8px',
        border: 0,
        [`&.${innerCls}-with-text:before`]: {
          height: '100%',
          top: '0%',
          left: '50%',
          borderTop: '0',
          borderLeft: `thin solid ${borderColor}`,
          transform: 'translateX(0%)',
          position: 'relative',
          width: '100%',
          content: '""',
        },
        [`&.${innerCls}-with-text:after`]: {
          height: '100%',
          top: '0%',
          left: '50%',
          borderTop: '0',
          borderLeft: `thin solid ${borderColor}`,
          transform: 'translateX(0%)',
          position: 'relative',
          width: '100%',
          content: '""',
        },
      },
    },
    [`&.${innerCls}-horizontal`]: {
      display: 'flex',
      clear: 'both',
      width: '100%',
      minWidth: '100%',
      margin: '24px 0',
      [`&.${innerCls}-with-text`]: {
        borderTop: 0,
      },
      [`&.${innerCls}-with-text:before`]: {
        position: 'relative',
        top: '50%',
        width: '50%',
        borderTop: '1px solid transparent',
        borderTopColor: borderColor,
        borderBottom: '0',
        transform: 'translateY(50%)',
        content: '" "',
      },
      [`&.${innerCls}-with-text:after`]: {
        position: 'relative',
        top: '50%',
        width: '50%',
        borderTop: '1px solid transparent',
        borderTopColor: borderColor,
        borderBottom: '0',
        transform: 'translateY(50%)',
        content: '" "',
      },
      [`&.${innerCls}-with-text.${innerCls}-text-left:before`]: {
        width: '10%',
      },
      [`&.${innerCls}-with-text.${innerCls}-text-left:after`]: {
        width: '90%',
      },
      [`&.${innerCls}-with-text.${innerCls}-text-right:before`]: {
        width: '90%',
      },
      [`&.${innerCls}-with-text.${innerCls}-text-right:after`]: {
        width: '10%',
      },
    },
  };
});

const Divider = (props: DividerProps) => {
  const { type = 'horizontal', textAlign = 'center', children } = props;

  return (
    <DividerBase
      className={classNames({
        [`${innerCls}-horizontal`]: type === 'horizontal',
        [`${innerCls}-vertical`]: type === 'vertical',
        [`${innerCls}-with-text`]: !!children,
        [`${innerCls}-text-${textAlign}`]: !!textAlign,
      })}
    >
      {!!children && <div style={{ padding: '0 1rem' }}>{children}</div>}
    </DividerBase>
  );
};

export default Divider;
