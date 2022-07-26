import styled from '@emotion/styled';
import React from 'react';

const GradientBackgroundLeft = styled.div({
  width: 500,
  height: 500,
  borderRadius: 1000,
  position: 'fixed',
  opacity: 0.25,
  WebkitFilter: 'blur(100px)',
  filter: 'blur(100px)',
  left: -250,
  top: 250,
  right: 'auto',
  bottom: 'auto',
  zIndex: '-1',
  backgroundImage: 'linear-gradient(45deg, #059DFF, #36C6F0)',
});

const GradientBackgroundRight = styled(GradientBackgroundLeft)({
  left: 'auto',
  top: -250,
  right: -250,
  bottom: 'auto',
  backgroundImage: 'linear-gradient(45deg, #FB5343, #6549D5)'
})


const GradientBackground = () => {
  return (
    <div>
      <GradientBackgroundLeft />
      <GradientBackgroundRight />
    </div>
  );
};

export default GradientBackground;
