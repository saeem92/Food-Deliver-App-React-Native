import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
{/* Above we have renamed status bar as expostatusbar this is know as rename action in an import*/}
import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView, } from 'react-native';

export default function App() {
  return (
    <> 
    {/* The above <> is called as a fragment they allow us to render two elements side by side without having to wrap it in a specific container or view */}
    <SafeAreaView style={{flex:1, marginTop:StatusBar.currentHeight}}> 
    {/* In the above code StatusBar.currentHeight is a android only function which takes care of the height of the status bar across all android devices. */}
    {/* Safeareaview is used to make sure UI is according to iOS and do not overlap with the statusbar in iOS we are using 
    flex:1 in the above to make sure you always fill the parent */}
    <View style = {{padding:16, backgroundColor:"green"}}>
    <Text>Search</Text>
    </View>
    <View style = {{flex:1, padding:16, backgroundColor:"blue"}}>
    {/* IN the above code we have given flex:1 in this view so that it will fill the screen completely and fill stick to the constraints of the screen.*/}
    <Text>list</Text>
    </View>
    </SafeAreaView>
    <ExpoStatusBar style ="auto" />
    </>
  );
}

const styles = StyleSheet.create({
            
});
