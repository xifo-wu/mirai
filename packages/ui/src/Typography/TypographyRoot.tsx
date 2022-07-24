import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { genInnerCls, createTheme, Theme } from '@xifo/system';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

type TypographyType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'secondary'
  | 'code'
  | 'title'
  | 'lgTitle';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
  type?: TypographyType;
  sx?: CSSProperties | ((theme: Theme) => CSSProperties);
}

export const innerCls = genInnerCls('typography');

const TypographyRoot = styled('span', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'type' && prop !== 'sx',
})<TypographyProps>((props) => {
  const { type = '', sx, theme: outerTheme } = props;
  const cls = type && `${innerCls}-${type}`;
  const theme = createTheme(outerTheme)[outerTheme.mode || 'light'];

  return {
    overflowWrap: 'break-word',
    clear: 'both',
    color: theme?.text?.primary,
    ...(type === 'h1' && {
      [`&.${cls}`]: {
        margin: '0px 0px 0.35em',
        fontWeight: 500,
        fontSize: 38,
        lineHeight: 1.23,
      },
    }),
    ...(type === 'h2' && {
      [`&.${cls}`]: {
        margin: '0px 0px 0.35em',
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 1.35,
      },
    }),
    ...(type === 'h3' && {
      [`&.${cls}`]: {
        margin: '0px 0px 0.35em',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 1.35,
      },
    }),
    ...(type === 'h4' && {
      [`&.${cls}`]: {
        margin: '0px 0px 0.35em',
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 1.35,
      },
    }),
    ...(type === 'h5' && {
      [`&.${cls}`]: {
        margin: '0px 0px 0.35em',
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 1.35,
      },
    }),
    ...(type === 'h6' && {
      [`&.${cls}`]: {
        margin: '0px 0px 0.35em',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 1.35,
      },
    }),
    ...(type === 'secondary' && {
      [`&.${cls}`]: {
        color: theme?.text?.secondary,
      },
    }),
    ...(type === 'code' && {
      [`&.${cls}`]: {
        margin: '0 1px',
        padding: '0.2em 0.4em',
        fontSize: '0.9em',
        background: '#f2f4f5',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        borderRadius: 3,
      },
    }),
    ...(type === 'title' && {
      [`&.${cls}`]: {
        margin: '0',
        lineHeight: 1.23,
        fontSize: '44px',
        fontWeight: 600,
      },
    }),
    ...(type === 'lgTitle' && {
      [`&.${cls}`]: {
        margin: '0',
        lineHeight: '1.15',
        fontSize: '4rem',
        fontWeight: 'bold',
      },
    }),
    ...sx,
    ...props.style,
  };
});

export default TypographyRoot;
