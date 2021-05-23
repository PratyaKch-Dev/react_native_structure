import React, {Fragment, useEffect} from 'react';
import styled from 'styled-components/native';
import {colors, fonts} from '~/templates/v1';

const DetailAppView = props => {
  const {Template, navigate} = props;
  console.log('herrrrrrrrr :: ', Template);

  return (
    <Template.TemplateWithTopbar
      title={'รายละเอียด'}
      useBack={true}
      useAndroidBack={true}>
      <DetailAppViewWrapper>
        <ButtonWrapper
          onPress={() => {
            navigate.back();
          }}>
          <ButtonText>Click Back</ButtonText>
        </ButtonWrapper>
      </DetailAppViewWrapper>
    </Template.TemplateWithTopbar>
  );
};

export default DetailAppView;

const DetailAppViewWrapper = styled.View`
  width: 100%;
  height: 100%
  background: ${colors.secondary.red1}
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
