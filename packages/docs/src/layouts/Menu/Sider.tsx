import React, { HtmlHTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import SiderItem from './SiderItem';

export interface SiderItemProps extends HtmlHTMLAttributes<HTMLDivElement> {
  key?: string;

  content?: ReactNode;
  icon?: ReactNode;
}

export interface SiderMenuProps {
  activeKey?: string;
  items?: SiderItemProps[];
  header?:  ReactNode;
}

const NavBox = styled('nav')({
  position: 'relative',
  listStyle: 'none',
  margin: '0px',
  padding: '0px 0px 8px',
  width: '100%',
  maxWidth: 360,
});

const SubHeader = styled('div')(({ theme }) => {
  return {
    boxSizing: 'border-box',
    lineHeight: '48px',
    listStyle: 'none',
    color: theme[theme.mode!]?.text?.secondary,
    fontWeight: 500,
    fontSize: '0.875rem',
    paddingLeft: 16,
    paddingRight: 16,
    // position: 'sticky',
    top: '0px',
    zIndex: '1',
  };
});

const SiderMenu = ({ header, items = [], activeKey, ...rest }: SiderMenuProps) => {
  return (
    <>
      <NavBox>
        {header && <SubHeader>{header}</SubHeader>}
        {items.map((item) => (
          <SiderItem
            {...rest}
            onClick={(e) => item.onClick?.(e)}
            active={(activeKey || '').indexOf(item.key || '') === 0}
            key={item.key}
            icon={item.icon}
          >
            {item.content}
          </SiderItem>
        ))}
      </NavBox>
    </>
  );
};

export default SiderMenu;
