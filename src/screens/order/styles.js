import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Wrapper = styled.View`
  margin-top: 40px;
  margin-right: 24px;
  margin-left: 24px;
  height: 300px;
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-radius: 8px;
  background-color: #f1f3f5;
  margin-bottom: 4px;
  
`;

export const Left = styled.Text`
  padding-left: 15px;
  font-size: 16px;
  color: #000;
`;

export const Right = styled.Text`
  padding-right: 15px;
  font-size: 16px;
  color: #000;
`;

export const Address = styled.View`
  border-radius: 8px;
  background-color: #f1f3f5;
  margin-bottom: 4px;
  padding: 15px;
  border: 2px solid #000000;
`;

export const TextAddress = styled.Text`
  font-size: 14px;
  color: #000000;
`;

export const ButtonStart = styled.TouchableOpacity`
  margin-top: 12px;
  padding: 20px;
  background-color: #010101;
  border-radius: 10px;
  align-items: center;
`;

export const TextStart = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;
