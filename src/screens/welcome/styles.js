// styles.js
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #515151;
  margin-bottom: 12px;
`;

export const MobileWrapper = styled.View`
  background-color: #f1f3f5;
  border-radius: 10px;
  margin-bottom: 12px;
`;

export const MobileInput = {
  padding: 20,
};

export const MobileButton = styled.TouchableOpacity`
  background-color: #010101;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
`;

export const MobileText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;
