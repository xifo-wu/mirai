import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { genInnerCls, createTheme } from '@xifo/system';
import { HTMLAttributes, ReactNode } from 'react';

type TypographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'secondary' | 'code' | 'lgTitle';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
  type?: TypographyType;
}

export const innerCls = genInnerCls('typography');

const TypographyRoot = styled('span', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'type',
})<TypographyProps>((props) => {
  const { type = '', theme: outerTheme } = props;
  const cls = type && `${innerCls}-${type}`;
  const theme = createTheme(outerTheme);

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
    ...(type === 'lgTitle' && {
      [`&.${cls}`]: {
        margin: '0',
        lineHeight: '1.15',
        fontSize: '4rem',
        fontWeight: 'bold',
      },
    }),
    ...props.style,
  };
});

export default TypographyRoot;
