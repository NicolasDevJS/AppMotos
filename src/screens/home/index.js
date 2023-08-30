import React from 'react';
import { useState, useEffect } from 'react';
import * as SC from "./styles";
import { Header } from "../../components/header";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';

const LOCATION_TRACKING = 'location-tracking';

var l1;
var l2;

export default function Home({ route }) {
    const navigation = useNavigation();
    const [locationStarted, setLocationStarted] = useState(false);

    const startLocationTracking = async () => {
        await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
            accuracy: Location.Accuracy.Highest,
            timeInterval: 10000,
            distanceInterval: 0,
        });
        const hasStarted = await Location.hasStartedLocationUpdatesAsync(
            LOCATION_TRACKING
        );
        setLocationStarted(hasStarted);
        console.log('tracking started?', hasStarted);
        navigation.navigate('Order')
    };

    useEffect(() => {
        const config = async () => {
            let resf = await Location.requestForegroundPermissionsAsync();
            let resb = await Location.requestBackgroundPermissionsAsync();
            if (resf.status != 'granted' && resb.status !== 'granted') {
                console.log('Permission to access location was denied');
            } else {
                console.log('Permission to access location granted');
            }
        };

        config();
    }, []);

    const startLocation = () => {
      
        startLocationTracking();
    }

    const stopLocation = () => {
        setLocationStarted(false);
        TaskManager.isTaskRegisteredAsync(LOCATION_TRACKING)
            .then((tracking) => {
                if (tracking) {
                    Location.stopLocationUpdatesAsync(LOCATION_TRACKING);
                }
            })
    }

    console.log(locationStarted, "locationStarted")

    return (
        <SC.Container>
            <Header title="Home" screen={route.name} />

            {locationStarted ?
                <SC.EndButton>
                    <SC.EndText onPress={stopLocation}>
                        Parar de receber
                    </SC.EndText>
                </SC.EndButton>

              :

            <SC.StartButton>
                <SC.StartText onPress={startLocation}>
                    Receber Ordens de Serviço
                </SC.StartText>
            </SC.StartButton>
          }    

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
        let lat = locations[0].coords.latitude;
        let long = locations[0].coords.longitude;

        l1 = lat;
        l2 = long;

        console.log(
            `${new Date(Date.now()).toLocaleString()}: ${lat},${long}`
        );
    }
});