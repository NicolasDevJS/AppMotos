// Welcome.js
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as SC from './styles';
import { ValidateMobileNumber } from '../../services/user';
import { TextInputMask } from 'react-native-masked-text';

export default function Welcome() {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState('');

  const validateMobile = async () => {
    // const hasMobile = await ValidateMobileNumber({ mobile })
    // if (hasMobile == true) {
    // }
    navigation.navigate('InformPassword', { mobile });
  };

  return (
    <SC.Container>
      <SC.Title>Por favor insira o seu número de celular</SC.Title>
      <SC.MobileWrapper>
        <TextInputMask
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
          keyboardType="numeric"
          placeholder="(00) 00000-0000"
          value={mobile}
          onChangeText={(text) => setMobile(text)}
          maxLength={15} // Limite de caracteres para DDD + número
          style={SC.MobileInput}
        />
      </SC.MobileWrapper>
      <SC.MobileButton onPress={validateMobile}>
        <SC.MobileText>Consultar número</SC.MobileText>
      </SC.MobileButton>
    </SC.Container>
  );
}
