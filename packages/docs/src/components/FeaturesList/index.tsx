import styled from '@emotion/styled';
import { Box } from '@xifo/mirai-ui';
import React, { Key, ReactNode } from 'react';

export interface FeaturesListItemProps {
  key: Key;
  content?: ReactNode;
  icon?: ReactNode;
}

export interface FeaturesListProps {
  items?: FeaturesListItemProps[];
}

const ULRoot = styled('ul')((props) => {
  return {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };
});

const LIRoot = styled('li')((props) => {
  return {
    display: 'flex',
    alignItems: 'center',
    margin: '15px 0',
    fontWeight: '400',
    lineHeight: 1.67,
    fontSize: 18,
    color: '#acacac',
  };
});

const FeaturesList = (props: FeaturesListProps) => {
  const { items } = props;
  return (
    <ULRoot>
      {items?.map((item) => (
        <LIRoot key={item.key}>
          {item.icon}
          <Box sx={{ marginLeft: 8 }}>{item.content}</Box>
        </LIRoot>
      ))}
    </ULRoot>
  );
};

export default FeaturesList;
