import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  padding-right: 24px;
  padding-left: 24px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #515151;
`;

export const PasswordContainer = styled.View`
  margin-top: 12px;
  flex-direction: row;
  align-items: center;
  background-color: #f1f3f5;
  border-radius: 10px;
`;

export const Mobile = styled.TextInput`
  flex: 1;
  padding: 20px;
`;

export const TogglePasswordButton = styled.TouchableOpacity`
  padding: 20px;
`;

export const MobileButton = styled.TouchableOpacity`
  margin-top: 12px;
  background-color: #010101;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
`;

export const MobileText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;
