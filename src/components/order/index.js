import React from 'react';
import * as SC from './styles';
import { Header } from '../header';
import ordersData from '../../../db.json'; // Importe os dados de ordens

export default function Order() {
  return (
    <SC.Container>
      <Header title="Ordens de serviço" />

      <SC.Wrapper>
        {ordersData.orders.map((order) => (
          <>
            <SC.Row key={order.id}>
              <SC.Left>Ordem</SC.Left>
              <SC.Right>{order.orderNumber}</SC.Right>
            </SC.Row>
            <SC.Row key={`${order.id}-date`}>
              <SC.Left>Data</SC.Left>
              <SC.Right>{order.date}</SC.Right>
            </SC.Row>
            <SC.Row key={`${order.id}-company`}>
              <SC.Left>Empresa</SC.Left>
              <SC.Right>{order.company}</SC.Right>
            </SC.Row>
            <SC.Row key={`${order.id}-address`}>
              <SC.Left>{order.address}</SC.Left>
            </SC.Row>
            <SC.Row key={`${order.id}-phone`}>
              <SC.Left>Telefone</SC.Left>
              <SC.Right>{order.phone}</SC.Right>
            </SC.Row>
            <SC.Row key={`${order.id}-contact`}>
              <SC.Left>Contato</SC.Left>
              <SC.Right>{order.contact}</SC.Right>
            </SC.Row>
            <SC.Address key={`${order.id}-delivery-address`}>
              <SC.TextAddress>{order.deliveryAddress}</SC.TextAddress>
            </SC.Address>
            <SC.ButtonStart key={`${order.id}-button`}>
              <SC.TextStart>Iniciar</SC.TextStart>
            </SC.ButtonStart>
          </>
        ))}
      </SC.Wrapper>
    </SC.Container>
  );
}
