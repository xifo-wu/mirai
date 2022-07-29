import React, { ReactNode } from 'react';
import { DefaultProps, genInnerCls, useSx } from '@xifo/mirai-system';
import classNames from 'classnames';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { Container, ContainerProps } from '../Container';
import { Box } from '../Box';

const innerCls = genInnerCls('navbar');

export interface NavBarProps extends DefaultProps {
  maxWidth?: ContainerProps['maxWidth'];
  title?: ReactNode;
  logo?: ReactNode;
  // title?: ReactNode;
  extra?: ReactNode;
  // menu
}

const NavBarRoot = styled('header', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<NavBarProps>((props) => {
  return {
    background: 'transparent',
    width: '100%',
    height: '100%',
    zIndex: 99,
  };
});

const NavBarBox = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<NavBarProps>((props) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'transparent',
    width: '100%',
    height: '100%',
    minHeight: 80,
  };
});

// TODO 支持自适应
const NavBar = (props: NavBarProps) => {
  const { logo, title, maxWidth, sx: outerSx, extra, className } = props;
  const sx = useSx(outerSx);

  return (
    <NavBarRoot sx={sx} className={classNames(innerCls, className)}>
      <Container sx={{ height: '100%' }} maxWidth={maxWidth}>
        <NavBarBox>
          <Box sx={{ display: 'flex' }}>
            {logo}
            {title}
          </Box>
          {extra}
        </NavBarBox>
      </Container>
    </NavBarRoot>
  );
};

export default NavBar;
