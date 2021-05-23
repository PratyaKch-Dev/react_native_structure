import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SafeAreaView} from 'react-native';
// ---
import {colors, fonts} from '~/templates/v1';
import {useBackAndroid} from '~/utils/hooks';
// ---
import Style from './TemplateFull.style';
// ---
const TemplateFull = ({
  // ---
  /** TemplateFull props
   * @param {Function} navigate change screen
   * @param {Function} onBack back screen
   * @param {Boolean} useBack show back component
   * @param {Boolean} useSafe use safearea
   * @param {Node} children apply children component
   * @param {String} bodyBackgroundColor set screen background
   * @param {String} iconBackColor set back icon color
   * @param {Boolean} useAndroidBack
   */
  children,
  onBack,
  useBack,
  useSafe,
  useAndroidBack,
  navigate,
  bodyBackgroundColor,
  iconBackColor,
  useTopBarBackground,
}) => {
  if (useAndroidBack) {
    useBackAndroid(() => {
      if (navigate) {
        navigate.back();
        return true;
      }
    });
  }

  const insets = useSafeAreaInsets();
  return (
    <Fragment>
      {useTopBarBackground && (
        <SafeAreaView style={{flex: 0, backgroundColor: '#ffffff'}} />
      )}
      {onBack && (
        <Style.BackWrapper onPress={onBack} top={insets.top}>
          <Style.BackIcon name="chevron-left" iconBackColor={iconBackColor} />
        </Style.BackWrapper>
      )}
      {useBack && (
        <Style.BackWrapper onPress={() => navigate.back()} top={insets.top}>
          <Style.BackIcon name="chevron-left" iconBackColor={iconBackColor} />
        </Style.BackWrapper>
      )}
      {!useSafe && (
        <Style.BodyWrapper bodyBackgroundColor={bodyBackgroundColor}>
          {children}
        </Style.BodyWrapper>
      )}
      {useSafe && (
        <Style.BodySafeAreaWrapper bodyBackgroundColor={bodyBackgroundColor}>
          {children}
        </Style.BodySafeAreaWrapper>
      )}
    </Fragment>
  );
};

TemplateFull.propTypes = {
  // ---
  children: PropTypes.node,
  onBack: PropTypes.func,
  useBack: PropTypes.bool,
  useSafe: PropTypes.bool,
  useAndroidBack: PropTypes.bool,
  useTopBarBackground: PropTypes.bool,
  navigate: PropTypes.object,
  bodyBackgroundColor: PropTypes.string,
  iconBackColor: PropTypes.string,
};

TemplateFull.defaultProps = {
  bodyBackgroundColor: colors.greys.dark8,
};

export default TemplateFull;
