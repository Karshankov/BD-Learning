import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Header from '../Components/HomeScreen/Header';
import Colors from '../Utils/Colors';
import LabsList from '../Components/HomeScreen/LabsList';

export default function LabsScreen() {

  return (
    <ScrollView
      bounces={false}    >
      <View
        style={{ backgroundColor: Colors.PRIMARY, height: 250, padding: 20 }}
      >
        <Header />
      </View>
      <View style={{ padding: 20 }}>
        <View style={{ marginTop: -120 }}>
          <LabsList courseLevel={'Labs'} />
        </View>
        
      </View>
    </ScrollView>
  );
}
