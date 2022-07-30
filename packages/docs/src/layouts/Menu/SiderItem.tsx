import styled from '@emotion/styled';
import React, { HtmlHTMLAttributes, ReactNode } from 'react';

export interface SiderItemProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  icon?: ReactNode;
  active?: boolean;
}

const SiderItemRoot = styled('div')<Pick<SiderItemProps, 'active'>>(props => ({
  backgroundColor: 'transparent',
  outline: '0px',
  border: '0px',
  margin: '0px',
  borderRadius: '0px',
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none',
  color: 'inherit',
  display: 'flex',
  WebkitBoxFlex: '1',
  flexGrow: '1',
  WebkitBoxPack: 'start',
  justifyContent: 'flex-start',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  minWidth: '0px',
  boxSizing: 'border-box',
  textAlign: 'left',
  padding: '8px 16px',
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  ...(props.active && {
    backgroundColor: props.theme.mode === 'dark' ? 'rgba(25, 118, 210, 0.3)' : 'rgba(25, 118, 210, 0.08)'
  })
}));

const SiderItemIcon = styled('div')({
  minWidth: '56px',
  flexShrink: '0',
  display: 'inline-flex',
});

const SiderItemContent = styled('div')({
  flex: '1 1 auto',
  minWidth: '0px',
  marginTop: '4px',
  marginBottom: '4px',
});

const SiderItem = ({ icon, children, active, ...rest }: SiderItemProps) => {
  return (
    <SiderItemRoot active={active} {...rest}>
      <SiderItemIcon>{icon}</SiderItemIcon>
      <SiderItemContent>{children}</SiderItemContent>
    </SiderItemRoot>
  );
};

export default SiderItem;
