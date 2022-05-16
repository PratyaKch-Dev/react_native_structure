import React, {useState} from 'react';
import {Platform} from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// ---
import {colors, fonts} from '~/templates/v1';
// ---
const PasswordInput = ({
  label,
  value,
  errorMessage,
  placeholder,
  onChange,
  isShowEye,
  isError,
  isCorrect,
  icon,
  remark,
  testID,
}) => {
  const [isFocus, onFocus] = useState(false);
  const [isSecureTextEntry, onChangeSecureTextEntry] = useState(true);
  return (
    <PasswordInputForm>
      <PasswordInputWrapper
        isFocus={isFocus}
        isError={isError}
        isAndroid={Platform.OS === 'android'}>
        {icon && <TitleIcon name={icon} />}
        <PasswordInputField
          value={value}
          isAndroid={Platform.OS === 'android'}
          onFocus={() => onFocus(true)}
          onBlur={() => onFocus(false)}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={colors.greys.dark2}
          autoCorrect={false}
          autoComplete="false"
          autoCapitalize="none"
          autoCompleteType="off"
          secureTextEntry={isSecureTextEntry}
        />
        {isSecureTextEntry && isShowEye && (
          <PasswordEyeIconWrapper
            onPress={() => onChangeSecureTextEntry(false)}>
            <PasswordEyeIconSource name="eye-off" />
          </PasswordEyeIconWrapper>
        )}
        {!isSecureTextEntry && isShowEye && (
          <PasswordEyeIconWrapper onPress={() => onChangeSecureTextEntry(true)}>
            <PasswordEyeIconSource name="eye" />
          </PasswordEyeIconWrapper>
        )}
        {isCorrect && (
          <CorrectWrapper>
            <CorrectIcon name={'check-bold'} />
          </CorrectWrapper>
        )}
        {isError && (
          <CorrectWrapper isError={isError}>
            <CorrectIcon name={'close'} isError={isError} />
          </CorrectWrapper>
        )}
      </PasswordInputWrapper>
      {isError && errorMessage && (
        <ErrorWrapper>
          <ErrorText isError={isError}>{errorMessage}</ErrorText>
        </ErrorWrapper>
      )}
      {remark && (
        <RemarkWrapper>
          <RemarkText>{remark}</RemarkText>
        </RemarkWrapper>
      )}
    </PasswordInputForm>
  );
};

PasswordInput.propTypes = {
  isError: PropTypes.bool,
  isCorrect: PropTypes.bool,
  isShowEye: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.string,
  remark: PropTypes.string,
  testID: PropTypes.string,
};

PasswordInput.defaultProps = {
  isShowEye: false,
  value: '',
};

export default PasswordInput;

const PasswordInputForm = styled.View`
  width: 100%;
`;

const PasswordEyeIconWrapper = styled.TouchableOpacity`
  width: 30px;

  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

const PasswordEyeIconSource = styled(MaterialCommunityIcons)`
  font-size: 16px;
  color: ${colors.greys.dark1};
`;

const PasswordInputWrapper = styled.View`
  width: 100%;
  height: 35px;
  ${({isAndroid}) =>
    isAndroid &&
    `
	height: 45px;
	`}
  border-color: ${props =>
    props.isError
      ? colors.secondary.red1
      : props.isFocus
      ? colors.primary.brand
      : colors.greys.dark6};
  border-bottom-width: 1px;
  border-radius: 10px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
`;

const PasswordInputField = styled.TextInput`
  flex: 1;
  height: 35px;
  ${({isAndroid}) =>
    isAndroid &&
    `
	height: 40px;
	margin-top: 5px;
	`}
  padding-left: 15px;
  padding-right: 15px;
  border-width: 0px;
  color: ${colors.primary.brand};
`;

const LabelWrapper = styled.View`
  margin-bottom: 2px;
`;

const LabelText = styled.Text`
  font-family: ${fonts.kanit.regular};
  font-size: 15px;
  color: ${props =>
    props.isError ? colors.secondary.red1 : colors.greys.dark0};
`;

const ErrorWrapper = styled.View`
  margin-top: 10px;
  margin-right: 6px;
`;

const ErrorText = styled.Text`
  font-family: ${fonts.sarabun.regular};
  font-size: 13px;
  text-align: center;
  color: ${props =>
    props.isError ? colors.secondary.red1 : colors.greys.dark0};
`;

const CorrectWrapper = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background: ${({isError}) =>
    isError ? '#f4735f' : colors.primary.brandLight};
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;

const CorrectIcon = styled(MaterialCommunityIcons)`
  font-size: 15px;
  color: #fff;
  align-self: center;
  position: relative;
  margin-top: 2px;
`;

const TitleIcon = styled(MaterialCommunityIcons)`
  font-size: 18px;
  color: ${colors.greys.dark7};
  align-self: center;
  position: relative;
  margin-top: 2px;
  margin-left: 5px;
  ${({isAndroid}) =>
    isAndroid &&
    `
margin-top: 7px;
`}
`;

const RemarkWrapper = styled.View`
  align-items: center;
  margin-top: 10px;
`;

const RemarkText = styled.Text`
  color: ${colors.greys.dark7};
  font-family: ${fonts.sarabun.regular};
  font-size: 12px;
`;
