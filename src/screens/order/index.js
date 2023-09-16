import React, { useState } from 'react';
import * as SC from './styles';
import { Header } from '../../components/header';
import ordersData from '../../../db.json';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Signature from '../Ass'; 

export default function Order() {
  const [imageUri, setImageUri] = useState(null);

  const takePicture = async () => {
  };

  return (
    <SC.Container>
      <Header title="Ordens de serviço" />

      <ScrollView style={{ flex: 1 }}>
        {ordersData.orders.map((order) => (
          <View key={order.id}>
            <SC.Row>
              <SC.Left>Ordem</SC.Left>
              <SC.Right>{order.orderNumber}</SC.Right>
            </SC.Row>
            <SC.Row>
              <SC.Left>Data</SC.Left>
              <SC.Right>{order.date}</SC.Right>
            </SC.Row>
            <SC.Row>
              <SC.Left>Empresa</SC.Left>
              <SC.Right>{order.company}</SC.Right>
            </SC.Row>
            <SC.Row>
              <SC.Left>{order.address}</SC.Left>
            </SC.Row>
            <SC.Row>
              <SC.Left>Telefone</SC.Left>
              <SC.Right>{order.phone}</SC.Right>
            </SC.Row>
            <SC.Row>
              <SC.Left>Contato</SC.Left>
              <SC.Right>{order.contact}</SC.Right>
            </SC.Row>
            <SC.Address>
              <SC.TextAddress>{order.deliveryAddress}</SC.TextAddress>
            </SC.Address>
            <SC.ButtonStart>
              <TouchableOpacity>
                <SC.TextStart>Iniciar</SC.TextStart>
              </TouchableOpacity>
            </SC.ButtonStart>
            <SC.ButtonStart>
              <TouchableOpacity onPress={takePicture}>
                <SC.TextStart>Tirar Foto</SC.TextStart>
              </TouchableOpacity>
            </SC.ButtonStart>            
            <SC.ButtonStart>
              <TouchableOpacity>
                <SC.TextStart>Assinar</SC.TextStart>
              </TouchableOpacity>
            </SC.ButtonStart>
          </View>
        ))}
      </ScrollView>
      {imageUri && (
        <View>
          <Text>Foto tirada:</Text>
          <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
        </View>
      )}
    </SC.Container>
  );
}




