import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import SignaturePad from 'react-native-signature-pad';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Demo() {
  const [signature, setSignature] = useState(null);
  const [signatureKey, setSignatureKey] = useState(1);
  const navigation = useNavigation();

  const getToken = async () => {
    navigation.navigate('Home');
    console.log("Assinatura capturada em formato base64:", signature);
  };

  const clearSignature = () => {
    setSignature(null);
    setSignatureKey(signatureKey + 1);
  };

  return (
    <View style={{ flex: 1 }}>
      <SignaturePad
        key={signatureKey}
        style={{ flex: 1, backgroundColor: 'white' }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 16 }}>
        <TouchableOpacity onPress={clearSignature} style={{ marginRight: 16 }}>
          <Text>Limpar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getToken}>
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
