import React, {Fragment, useEffect} from 'react';
import styled from 'styled-components/native';
import {colors, fonts} from '~/templates/v1';

const StartAppView = props => {
  console.log('herrrrrrrrr');
  return <StartAppViewWrapper></StartAppViewWrapper>;
};

export default StartAppView;

const StartAppViewWrapper = styled.View`
  width: 100%;
  height: 100%
  background: ${colors.secondary.red1}
`;
