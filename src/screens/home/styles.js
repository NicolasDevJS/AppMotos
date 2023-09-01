import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  padding-right: 24px;
  padding-left: 24px;
`;

export const StartButton = styled.TouchableOpacity`
  margin-top: 150%;
  padding: 20px;
  background-color: #00ff00;
  border-radius: 10px;
  align-items: center;
`;

export const StartText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

export const EndButton = styled.TouchableOpacity`
  margin-top: 150%;
  padding: 20px;
  background-color: #ff0000;
  border-radius: 10px;
  align-items: center;
`;

export const EndText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;
