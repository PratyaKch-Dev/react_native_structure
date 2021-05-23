import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, fonts} from '~/templates/v1';

// ---

const BodyWrapper = styled.View`
  flex: 1;
  background: ${({bodyBackgroundColor}) =>
    bodyBackgroundColor ? bodyBackgroundColor : '#ffffff'};
`;

const BodySafeAreaWrapper = styled.SafeAreaView`
  flex: 1;
  background: ${({bodyBackgroundColor}) =>
    bodyBackgroundColor ? bodyBackgroundColor : '#ffffff'};
`;

const BackWrapper = styled.TouchableOpacity`
  width: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: ${props => props.top}px;
  left: 0px;
`;

const BackIcon = styled(MaterialIcons)`
  font-size: 45px;
  color: ${({iconBackColor}) => (iconBackColor ? iconBackColor : '#fff')};
`;
// ---
export default {
  BodyWrapper,
  BodySafeAreaWrapper,
  BackWrapper,
  BackIcon,
};
