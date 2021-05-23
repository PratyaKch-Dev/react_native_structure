import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {RefreshControl, SafeAreaView, Animated} from 'react-native';
import truncate from 'lodash/truncate';
// ---
import {colors, fonts} from '~/templates/v1';
import {isCloseToBottom} from '~/utils/ui/scroll';
import {useBackAndroid} from '~/utils/hooks';
// ---
import Style from './TemplateWithTopbar.style';
// ---
const TemplateWithTopbar = ({
  // ---
  /** TemplateWithTopbar props
   * @param {Function} navigate
   * @param {Function} onBack
   * @param {Function} onRefresh
   * @param {Boolean} useBack
   * @param {Boolean} useScrollable
   * @param {Boolean} useTopbarBorder
   * @param {Boolean} useAndroidBack
   *
   * @param {Node} children
   * @param {Node} rightNode
   * @param {String} bodyBackgroundColor
   * @param {String} iconBackColor
   * @param {String} title
   * @param {String} contentPadding
   * @param {Number} loadMoreBottom
   * @param {Number} useSafe
   */
  children,
  title,
  rightNode,
  isHiddenRight,
  centerNode,
  showBottomNode,
  bottomNode,
  onBack,
  useBack,
  useTopbarBorder,
  navigate,
  bodyBackgroundColor,
  useScrollable,
  refreshControl,
  onMomentumScrollEnd,
  onScrollRef,
  contentPadding,
  onRefresh,
  loadMoreBottom,
  useSafe,
  useAndroidBack,
  onAddCustomBack,
  canCancelContentTouches,
  customStyleLeft,
}) => {
  const handleBack = () => {
    if (navigate && !onBack) {
      navigate.back();
    }

    if (onBack) {
      onBack();
    }
  };

  if (useAndroidBack) {
    useBackAndroid(() => {
      if (navigate) {
        handleBack();
        return true;
      }
    });
  }

  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: '#ffffff'}} />
      <Style.TopBarBackground>
        <Style.TopBarWrapper
          useTopbarBorder={useTopbarBorder}
          useNativeDriver="false">
          <Style.TopBarLeftWrapper customStyleLeft={customStyleLeft}>
            {/* use custom back function */}
            {onBack && (
              <Style.BackWrapper onPress={onBack}>
                <Style.BackIcon name="chevron-left" />
              </Style.BackWrapper>
            )}
            {/* use default back function */}
            {useBack && (
              <Style.BackWrapper onPress={handleBack}>
                <Style.BackIcon name="chevron-left" />
              </Style.BackWrapper>
            )}
          </Style.TopBarLeftWrapper>
          <Style.TopBarTitleWrapper>
            {title !== '' && (
              <Style.TopBarTitleText contentPadding={contentPadding}>
                {truncate(title, {
                  length: 20,
                })}
              </Style.TopBarTitleText>
            )}
            {centerNode}
          </Style.TopBarTitleWrapper>

          {!isHiddenRight && (
            <Style.TopBarRightWrapper>
              <Fragment>{rightNode}</Fragment>
            </Style.TopBarRightWrapper>
          )}
        </Style.TopBarWrapper>
        {showBottomNode && (
          <Style.TopBarBottomWrapper>{bottomNode}</Style.TopBarBottomWrapper>
        )}
      </Style.TopBarBackground>
      {useScrollable && (
        <Style.BodyScrollWrapper
          ref={onScrollRef}
          bodyBackgroundColor={bodyBackgroundColor}
          canCancelContentTouches={canCancelContentTouches}
          refreshControl={
            onRefresh ? (
              <RefreshControl refreshing={false} onRefresh={onRefresh} />
            ) : (
              refreshControl
            )
          }
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: new Animated.Value(0),
                  },
                },
              },
            ],
            {
              listener: event => {
                if (
                  isCloseToBottom({
                    ...event.nativeEvent,
                    loadMoreBottom,
                  })
                ) {
                  onMomentumScrollEnd();
                }
              },
            },
          )}
          scrollEventThrottle={100}>
          {useSafe && (
            <Style.BodyContentSafeAreaViewWrapper
              contentPadding={contentPadding}>
              {children}
            </Style.BodyContentSafeAreaViewWrapper>
          )}
          {!useSafe && (
            <Style.BodyContentWrapper contentPadding={contentPadding}>
              {children}
            </Style.BodyContentWrapper>
          )}
        </Style.BodyScrollWrapper>
      )}
      {!useScrollable && (
        <Style.BodyWrapper bodyBackgroundColor={bodyBackgroundColor}>
          {useSafe && (
            <Style.BodyContentSafeAreaViewWrapper>
              {children}
            </Style.BodyContentSafeAreaViewWrapper>
          )}
          {!useSafe && (
            <Style.BodyContentWrapper>{children}</Style.BodyContentWrapper>
          )}
        </Style.BodyWrapper>
      )}
    </Fragment>
  );
};

TemplateWithTopbar.propTypes = {
  // ---
  children: PropTypes.node,
  rightNode: PropTypes.node,
  title: PropTypes.string,
  contentPadding: PropTypes.string,
  bodyBackgroundColor: PropTypes.string,
  onBack: PropTypes.func,
  useBack: PropTypes.bool,
  useAndroidBack: PropTypes.bool,
  navigate: PropTypes.object,
  customStyleLeft: PropTypes.object,
  useScrollable: PropTypes.bool,
  useTopbarBorder: PropTypes.bool,
  useSafe: PropTypes.bool,
  isHiddenRight: PropTypes.bool,
  refreshControl: PropTypes.node,
  onMomentumScrollEnd: PropTypes.func,
  onScrollRef: PropTypes.func,
  onRefresh: PropTypes.func,
  onAddCustomBack: PropTypes.func,
  loadMoreBottom: PropTypes.number,
};

TemplateWithTopbar.defaultProps = {
  bodyBackgroundColor: colors.greys.dark8,
  title: '',
  contentPadding: '0px',
  useTopbarBorder: false,
  isHiddenRight: false,
  canCancelContentTouches: true,
  customStyleLeft: {},
  onMomentumScrollEnd: () => null,
  onRefresh: () => null,
  refreshControl: <RefreshControl refreshing={false} onRefresh={() => null} />,
  onScrollRef: () => null,
};

export default TemplateWithTopbar;
