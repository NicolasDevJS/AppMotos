import styled from 'styled-components/native';

export const Bar = styled.View`
  height: 120px;
  background-color: #f1f3f5;
`;

export const Inside = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 64px;
  margin-right: 20px;
  margin-left: 20px;
  height: 30px;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ScreenName = styled.Text`
  padding-left: 8px;
  font-size: 16px;
  font-weight: 400;
  color: #010101;
`;

export const Profile = styled.View`
  width: 32px;
  height: 20px;
`;

export const ProfileInfo = styled.View`
  position: absolute;
  bottom: -100px;
  right: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  width: 180px;
`;

export const ProfileInfoText = styled.Text`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

export const LogOffButton = styled.Text`
  font-size: 14px;
  color: #ff0000;
  margin-top: 10px;
  text-align: center;
`;
