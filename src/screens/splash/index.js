import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 2000);
  }, [navigation]);

  return (
    <S.SplashScreen>
      <S.AppLogo source={require('../splash/logo/logo.jpg')} />
    </S.SplashScreen>
  );
}
