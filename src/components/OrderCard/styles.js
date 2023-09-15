import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Wrapper = styled.View`
  margin-right: 24px;
  margin-left: 24px;
  height: 300px;
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  border-radius: 8px;
  background-color: #f1f3f5;
  margin-bottom: 4px;
  border-color: #0000;
`;

export const Left = styled.Text`
position: absolute;
right: 70%;
  font-size: 16px;
  color: #000;
  position: absolute;
`;

export const Right = styled.Text`
position: absolute;
left: 45%;
  font-size: 16px;
  color: #000;
`;

export const ButtonStart = styled.TouchableOpacity`
  margin-top: 5%;
  background-color: #ff0000;
  border-radius: 10px;
  align-items: center;
`;

