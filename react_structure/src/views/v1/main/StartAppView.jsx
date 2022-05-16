import React, {Fragment, useEffect} from 'react';
import styled from 'styled-components/native';
import {colors, fonts} from '~/templates/v1';
import ExampleCoreContainer from '~/modules/example/example-core/ExampleCoreContainer';

import AppCoreContainer from '~/modules/app/app-core/AppCoreContainer';
import I18n from '~/utils/lang';
import replaceAscii from '~/utils/data/replaceAscii';
import {TextInput, PasswordInput} from '~/components/common/v1/form/input';
import AuthView from '~/views/v1/auth/AuthView';
import HomeView from '~/views/v1/auth/HomeView';
import {isEmpty} from 'lodash';

const StartAppView = props => {
  const {Template, navigate} = props;

  return (
    <AppCoreContainer
      {...props}
      render={({
        authData,
        emailLogin,
        passwordLogin,
        onSetEmailLogin,
        onSetPasswordLogin,
        onLogin,
        onAuthLogout,
      }) => {
        const accesstoken = !isEmpty(authData) ? authData.token : null;
        return (
          <Template.TemplateFull
            title={'หน้าแรก'}
            useBack={false}
            useAndroidBack={true}>
            <StartAppViewWrapper>
              {isEmpty(accesstoken) && (
                <AuthView
                  emailLogin={emailLogin}
                  passwordLogin={passwordLogin}
                  onSetEmailLogin={onSetEmailLogin}
                  onSetPasswordLogin={onSetPasswordLogin}
                  onLogin={onLogin}
                />
              )}
              {!isEmpty(accesstoken) && (
                <HomeView onAuthLogout={onAuthLogout} />
              )}
            </StartAppViewWrapper>
          </Template.TemplateFull>
        );
      }}
    />
  );
};

export default StartAppView;

const StartAppViewWrapper = styled.View`
  width: 100%;
  height: 100%;
  background: ${colors.primary.white};
  align-items: center;
  justify-content: center;
`;

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

const TextInputWapper = styled.View`
  width: 75%;

  border-radius: 8px;
  align-self: center;
  margin-top: 15px;
`;
