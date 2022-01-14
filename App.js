import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView> 
    {/* Safeareaview is used to make sure UI is according to iOS and do not overlap with the statusbar in iOS*/}
    <View>
    <Text>Our React native Blank Canvas</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
            
});
