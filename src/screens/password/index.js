import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as SC from './styles';
import { GetUserToken } from '../../services/authentication';
import { ReceiveTokenFromBackend } from '../../services/localStorage';



export default function InformPassword({ route }) {
    const mobile = route.params.mobile;
    const navigation = useNavigation();
    const [password, setPassword] = useState('')

    const getToken = async () => {
        navigation.navigate('Home')
        // const backendToken = await GetUserToken({ mobile, password })
        // if (backendToken != false) {
        //     await ReceiveTokenFromBackend({ backendToken })
        //     navigation.navigate('Home')
        // }
    }

    return (
        <SC.Container>
            <SC.Title>Número encontrado, por favor insira a senha </SC.Title>
            <SC.Mobile 
                secureTextEntry={true}
                placeholder='Sua senha'
                value={password}
                onChangeText={setPassword}
            />
            <SC.MobileButton onPress={getToken}>
                <SC.MobileText>Entrar</SC.MobileText>
            </SC.MobileButton>
        </SC.Container>
    );
}