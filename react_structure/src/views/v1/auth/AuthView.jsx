import React, {Fragment, useEffect} from 'react';
import styled from 'styled-components/native';
import {colors, fonts} from '~/templates/v1';
import ExampleCoreContainer from '~/modules/example/example-core/ExampleCoreContainer';

import AppCoreContainer from '~/modules/app/app-core/AppCoreContainer';
import I18n from '~/utils/lang';
import replaceAscii from '~/utils/data/replaceAscii';
import {TextInput, PasswordInput} from '~/components/common/v1/form/input';

const AuthView = ({
  emailLogin,
  passwordLogin,
  onSetEmailLogin,
  onSetPasswordLogin,
  onLogin,
}) => {
  return (
    <Fragment>
      <TextTitle>เข้าสู่ระบบ</TextTitle>
      <TextInputWapper>
        <TextInput
          value={emailLogin}
          onChange={value => onSetEmailLogin(replaceAscii(value))}
          placeholder={'อีเมล'}
          label="Email"
          isError={false}
          errorMessage={'อีเมลไม่ถูกต้อง'}
          onClearError={
            () => {}
            // onChangeFormInput('email', '')
          }
          isCorrect={false}
          icon="email-outline"
          // remark={text18n('Auth.Register.useNextLogin')}
        />
      </TextInputWapper>
      <TextInputWapper>
        <PasswordInput
          placeholder={'รหัสผ่าน'}
          value={passwordLogin}
          isShowEye={true}
          isError={false}
          isCorrect={false}
          errorMessage={''}
          onChange={value => onSetPasswordLogin(value)}
          icon="lock-outline"
        />
      </TextInputWapper>

      <ButtonWrapper onPress={() => onLogin()}>
        <ButtonText>Click</ButtonText>
      </ButtonWrapper>
    </Fragment>
  );
};

export default AuthView;

const TextTitle = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: #13999b;
  text-align: center;
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
