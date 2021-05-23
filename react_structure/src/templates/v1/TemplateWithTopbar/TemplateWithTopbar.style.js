import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, fonts} from '~/templates/v1';
// ---
const TopBarBackground = styled.SafeAreaView`
  background-color: #ffffff;
  position: relative;
`;

const TopBarWrapper = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  position: relative;
  background: #ffffff;
`;

const TopBarTitleWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TopBarTitleText = styled.Text`
  text-align: center;
  color: ${colors.primary.black};

  font-weight: 600;
  font-size: 20px;
`;

const TopBarLeftWrapper = styled.View`
  width: 80px;
  height: 50px;
  position: relative;
  flex-direction: row;
  ${({customStyleLeft}) => customStyleLeft && customStyleLeft}
`;

const TopBarRightWrapper = styled.View`
  width: 80px;
  height: 50px;
  position: relative;
`;

const BodyWrapper = styled.View`
  flex: 1;
  background-color: ${({bodyBackgroundColor}) => bodyBackgroundColor};
`;

const BodyScrollWrapper = styled.ScrollView`
  flex: 1;
  background-color: ${({bodyBackgroundColor}) => bodyBackgroundColor};
`;

const BackWrapper = styled.TouchableOpacity`
  width: 50px;
  align-items: center;
  justify-content: center;
`;

const BodyContentSafeAreaViewWrapper = styled.SafeAreaView`
  flex: 1;
  padding: ${({contentPadding}) => (contentPadding ? contentPadding : '0px')};
`;

const BodyContentWrapper = styled.View`
  flex: 1;
  padding: ${({contentPadding}) => (contentPadding ? contentPadding : '0px')};
`;

const BackIcon = styled(MaterialIcons)`
  font-size: 45px;
  color: ${colors.greys.dark0};
`;
const TopBarBottomWrapper = styled.View`
  width: 92%;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  position: relative;
  align-self: center;
  margin-bottom: 5px;
`;
// ---
export default {
  TopBarBackground,
  TopBarWrapper,
  TopBarTitleWrapper,
  TopBarTitleText,
  TopBarLeftWrapper,
  TopBarRightWrapper,
  BodyWrapper,
  BodyScrollWrapper,
  BackWrapper,
  BackIcon,
  BodyContentWrapper,
  BodyContentSafeAreaViewWrapper,
  TopBarBottomWrapper,
};
