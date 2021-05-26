import React, {Fragment, useEffect} from 'react';
import styled from 'styled-components/native';
import {colors, fonts} from '~/templates/v1';
import ExampleCoreContainer from '~/modules/example/example-core/ExampleCoreContainer';

const StartAppView = props => {
  const {Template, navigate} = props;

  return (
    <ExampleCoreContainer
      {...props}
      render={({hotelDeals, isLoadingHotelDeal}) => {
        return (
          <Template.TemplateFull
            title={'หน้าแรก'}
            useBack={false}
            useAndroidBack={true}>
            <StartAppViewWrapper>
              <ButtonWrapper
                onPress={() => {
                  navigate.to('DetailAppView');
                }}>
                <ButtonText>Click</ButtonText>
              </ButtonWrapper>
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
  background: ${colors.secondary.red1};
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.TouchableOpacity`
  margin-top: 10px;
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
