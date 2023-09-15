import React from 'react';
import * as SC from './styles';
import ordersData from '../../../db.json'; 
import { useNavigation } from '@react-navigation/native';

export default function Order() {
  const navigation = useNavigation();

  const navigateToOrders = () => {
    navigation.navigate('Order'); 
  };

  return (
    <SC.Container>
      <SC.Wrapper>
        {ordersData.orders.map((order) => (
          <SC.ButtonStart key={`${order.id}-button`} onPress={navigateToOrders}>
            <SC.Row key={order.id}>
              <SC.Left>Ordem: {order.orderNumber}</SC.Left>
              <SC.Right>Compania: {order.company}</SC.Right>
            </SC.Row>
          </SC.ButtonStart>
        ))}
      </SC.Wrapper>
    </SC.Container>
  );
}

