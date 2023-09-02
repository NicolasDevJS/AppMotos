import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as SC from './styles';
import { Header } from '../../components/header';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import Order from '../order';

const LOCATION_TRACKING = 'location-tracking';
export default function Home({ route }) {
  const navigation = useNavigation();
  const [locationStarted, setLocationStarted] = useState(false);

  useEffect(() => {
    async function checkPermissions() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        await Location.requestBackgroundPermissionsAsync();
      } else {
        console.log('Permission to access location was denied');
      }
    }

    checkPermissions();
  }, []);

  const startLocationTracking = async () => {
    await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
      accuracy: Location.Accuracy.Highest,
      timeInterval: 10000,
      distanceInterval: 0,
    });
    setLocationStarted(true);
  };

  const stopLocationTracking = async () => {
    setLocationStarted(false);
    await Location.stopLocationUpdatesAsync(LOCATION_TRACKING);
  };

  return (
    <SC.Container>
      <Header title="Home" screen={route.name} />

      <SC.Content>
        {locationStarted ? (
          <SC.EndButton onPress={stopLocationTracking}>
            <SC.EndText>Parar de receber</SC.EndText>
          </SC.EndButton>
        ) : (
          <SC.StartButton onPress={startLocationTracking}>
            <SC.StartText>Receber Ordens de Serviço</SC.StartText>
          </SC.StartButton>
        )}
      </SC.Content>
    </SC.Container>
  );
}

TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
  if (error) {
    console.log('LOCATION_TRACKING task ERROR:', error);
    return;
  }
  if (data) {
    const { locations } = data;
    const { latitude, longitude } = locations[0].coords;

    console.log(
      `${new Date(Date.now()).toLocaleString()}: ${latitude},${longitude}`
    );
  }
});
