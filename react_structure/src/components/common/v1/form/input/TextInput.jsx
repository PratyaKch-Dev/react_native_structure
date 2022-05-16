import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// ---
import {colors, fonts} from '~/templates/v1';
// import createTestID from '~/utils/automations/createTestID';
// ---
const TextInput = ({
  textInputProps,
  label,
  value,
  errorMessage,
  placeholder,
  onChange,
  isError,
  isCorrect,
  onClearError,
  inputColor,
  icon,
  iconSize,
  iconColor,
  borderColor,
  valueSize,
  valueColor,
  backgroundColor,
  valueWeight,
  remark,
  editable,
  iconImage,
  testID,
  isButtonClearIcon,
  onClearSearch,
  isButtonSearch,
  onSearch,
}) => {
  const [isFocus, onFocus] = useState(false);
  const configKeyboard =
    Platform.OS === 'android'
      ? {
          keyboardType: 'visible-password',
        }
      : {};
  return (
    <TextInputForm>
      {/* {label && (
				<LabelWrapper>
					<LabelText isError={isError}>{label}</LabelText>
				</LabelWrapper>
			)} */}
      <TextInputWrapper
        isFocus={isFocus}
        isError={isError}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        isAndroid={Platform.OS === 'android'}>
        {icon && (
          <TitleIcon name={icon} iconSize={iconSize} iconColor={iconColor} />
        )}
        {iconImage && iconImage}
        <TextInputField
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
          secureTextEntry={false}
          isError={isError}
          inputColor={inputColor}
          valueSize={valueSize}
          valueColor={valueColor}
          valueWeight={valueWeight}
          editable={editable}
          //   {...createTestID(testID)}
          {...configKeyboard}
          {...textInputProps}
        />
        {isCorrect && (
          <CorrectWrapper
            onPress={isError ? onClearError : () => null}
            isError={isError}>
            <CorrectIcon
              name={isError ? 'close' : 'check-bold'}
              isError={isError}
            />
          </CorrectWrapper>
        )}
        {isButtonClearIcon && (
          <CancelIconWrapper onPress={onClearSearch}>
            <CancelIcon name="close" />
          </CancelIconWrapper>
        )}
        {isButtonSearch && (
          <CancelIconWrapper onPress={onSearch}>
            <SearchIcon name="search" />
          </CancelIconWrapper>
        )}
      </TextInputWrapper>
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
    </TextInputForm>
  );
};
// ---
TextInput.propTypes = {
  isError: PropTypes.bool,
  isCorrect: PropTypes.bool,
  isButtonClearIcon: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  inputColor: PropTypes.string,
  errorMessage: PropTypes.string,
  testID: PropTypes.string,
  onChange: PropTypes.func,
  onClearError: PropTypes.func,
  onClearSearch: PropTypes.func,
  icon: PropTypes.string,
  remark: PropTypes.string,
  iconSize: PropTypes.string,
  iconColor: PropTypes.string,
  borderColor: PropTypes.string,
  valueSize: PropTypes.string,
  valueColor: PropTypes.string,
  valueWeight: PropTypes.string,
  editable: PropTypes.bool,
  iconImage: PropTypes.node,
};
// ---
TextInput.defaultProps = {
  inputColor: colors.primary.brand,
  editable: true,
};
// ---
export default TextInput;
// ---
const TextInputForm = styled.View`
  width: 100%;
`;

const TextInputWrapper = styled.View`
  width: 100%;
  height: 35px;
  ${({isAndroid}) =>
    isAndroid &&
    `
	height: 40px;
	`}
  border-color: ${props =>
    props.isError
      ? colors.secondary.red1
      : props.isFocus
      ? colors.primary.brand
      : colors.greys.dark6};
  border-bottom-width: 1px;
  border-radius: 10px;
  background-color: ${props =>
    props.backgroundColor ? colors.greys.dark4 : colors.primary.white};
  flex-direction: row;
  align-items: center;
  ${({borderColor}) =>
    borderColor &&
    `
	
		border-color: ${borderColor};`}
`;

const TextInputField = styled.TextInput`
  flex: 1;
  height: 35px;
  ${({isAndroid}) =>
    isAndroid &&
    `
	height: 50px;
	margin-bottom: -10px;
	`}
  padding-left: 15px;
  padding-right: 15px;
  border-width: 0px;
  font-family: ${fonts.sarabun.regular};
  color: ${props => (props.isError ? colors.secondary.red1 : props.inputColor)};
  ${({valueSize}) =>
    valueSize &&
    `
	font-size: ${valueSize};
	`}

  ${({valueColor}) =>
    valueColor &&
    `
		color: ${valueColor};
	`}
	${({valueWeight}) =>
    valueWeight &&
    `
		font-weight: ${valueWeight};
	`}
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

const CancelIconWrapper = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 100px;

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

const CancelIcon = styled(MaterialCommunityIcons)`
  font-size: 20px;
  color: #7e7e7e;
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
  ${({iconSize}) =>
    iconSize &&
    `
		font-size: ${iconSize};
	`}

	${({iconColor}) =>
    iconColor &&
    `
		color: ${iconColor};
	`}
`;

const SearchIcon = styled(FontAwesome)`
  font-size: 17px;
  color: #7e7e7e;
`;

const RemarkWrapper = styled.View`
  align-items: center;
  margin-top: 10px;
`;

const RemarkText = styled.Text`
  color: ${colors.greys.dark7};
  font-family: ${fonts.sarabun.regular};
  font-size: 12px;
  text-align: center;
  line-height: 20px;
`;
