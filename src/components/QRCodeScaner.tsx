import React from 'react';
import { Image, ScrollView, View, Text, Dimensions, StyleSheet, StatusBar, TouchableOpacity, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {NavigationStackProp} from 'react-navigation-stack';

var {width, height} = Dimensions.get('window');

export interface QRProps{
  navigation: NavigationStackProp
}

export class QRCodeScaner extends React.Component<QRProps> {
    constructor(props: QRProps) {
        super(props);
    }
    render(){
        return (
            <View style={{
                backgroundColor: "#fff",
                flex: 1
            }}>
                <QRCodeScanner
                    onRead= {(e: any) => {
                      // Linking
                      //   .openURL(e.data)
                      //   .catch(err => console.error('An error occured', err));
              
                          //Alert.alert(e.data);
                          let callBack = this.props.navigation.getParam("callBack");
                          callBack(e.data);
                          this.props.navigation.pop();}}
                />
          </View>
        )
    }
}

//样式
const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777',
    },
    textBold: {
      fontWeight: '500',
      color: '#000',
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
      padding: 16,
    },
});