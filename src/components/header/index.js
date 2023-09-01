import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native'; // Importe o componente Text
import {
  Bar,
  Inside,
  Left,
  ScreenName,
  Profile,
  ProfileInfo,
  LogOffButton,
} from './styles';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Header({ title, screen }) {
  const navigation = useNavigation();
  const [isProfileInfoOpen, setProfileInfoOpen] = useState(false);

  const toggleProfileInfo = () => {
    setProfileInfoOpen(!isProfileInfoOpen);
  };

  const handleLogOff = () => {
    // Implemente a lógica de logoff aqui
  };

  return (
    <Bar>
      <Inside>
        <Left>
          {screen !== 'Home' && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo name="chevron-thin-left" size={15} color="#010101" />
            </TouchableOpacity>
          )}
          <ScreenName>{title}</ScreenName>
        </Left>

        <TouchableOpacity onPress={toggleProfileInfo}>
          <Profile>
            <Ionicons name="ios-person-outline" size={20} color="#010101" />
          </Profile>
        </TouchableOpacity>
      </Inside>
      {isProfileInfoOpen && (
        <ProfileInfo>
          <Text>Nome: Erico malandrão</Text>
          <Text>Telefone: 144644848</Text>
          <LogOffButton onPress={handleLogOff}>Sair</LogOffButton>
        </ProfileInfo>
      )}
    </Bar>
  );
}
