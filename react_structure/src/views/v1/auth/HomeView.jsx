import React, {Fragment, useEffect} from 'react';
import styled from 'styled-components/native';
import {colors, fonts} from '~/templates/v1';
import ExampleCoreContainer from '~/modules/example/example-core/ExampleCoreContainer';

import AppCoreContainer from '~/modules/app/app-core/AppCoreContainer';
import I18n from '~/utils/lang';
import replaceAscii from '~/utils/data/replaceAscii';
import {TextInput, PasswordInput} from '~/components/common/v1/form/input';

const HomeView = ({onAuthLogout}) => {
  return (
    <Fragment>
      <ButtonWrapper onPress={() => onAuthLogout()}>
        <ButtonText>Click</ButtonText>
      </ButtonWrapper>
    </Fragment>
  );
};

export default HomeView;

const ButtonWrapper = styled.TouchableOpacity`
  margin-top: 20px;
  margin-bottom: 10px;
  border: solid 1px #13999b;
  background-color: #ffffff;
  padding: 10px 50px;
  border-radius: 10px;
`;
const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #13999b;
`;
