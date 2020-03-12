import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions } from "react-native"
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'

export default function MapScreen() {
    const [long, setLong] = useState(24.934210);//24.934210
    const [lat, setLat] = useState(60.201718);//60.201718
  
    useEffect(() => {
      this.getLocation();
    },[]);
  
    getLocation = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if(status != 'granted'){
        alert('No permission to access location');
      }
      else {
        let location = await Location.getCurrentPositionAsync({accuracy:5});
        //console.log(location)
        setLong(location.coords.longitude);
        setLat(location.coords.latitude);
      }
    }
    const { width, height } = Dimensions.get('window');

    return (
        <View>
            <MapView style={{width, height}} 
                region={{
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0221,
                }}>
               <Marker coordinate={{           
                    latitude: lat,
                    longitude: long,
                }}/>
            </MapView>
        </View>
    );
}