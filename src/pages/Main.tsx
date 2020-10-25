/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, Button, Alert, Image, TouchableOpacity } from 'react-native';

import { Flex, Provider, Modal, Tag, NoticeBar } from '@ant-design/react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import 'text-encoding-polyfill';
import { createAccount, signJuBJWT, resolveJubDID, verifyJuBJWT, showVCToOthers } from '../core/JubCore';
declare const global: { HermesInternal: null | {} };
import { SpliteLine, SpliteLineDefaultProps } from '../components/SpliteLine';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, NavigationStackProp } from 'react-navigation-stack';
import MyWebView from '../components/MyWebView';
import VCDetailsView from '../components/VCDetailsView';
import { QRCodeScaner, QRProps } from '../components/QRCodeScaner';
import { outlineGlyphMap } from '@ant-design/icons-react-native/lib/outline';
import _ from 'lodash';
import VCCard from "./VCCard"
import { VC_DEFAULT, USER_DID } from "../Constants"
import { ALL } from 'dns';
const screen = Dimensions.get("screen");

export interface HomeProps {
  navigation: NavigationStackProp;
}
interface HomeState {
  showVCS: any[]
  selectVC?: any
  totalVCS: any[]
  qrUrl: string
  displayHotail: string
}
var self: any;
export class HomePage extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props)
    this.state = {
      showVCS: [],
      totalVCS: VC_DEFAULT,
      displayHotail: 'none',
      qrUrl: ""
    }
    self = this;
  }
  handleAddShowVC(addVC: any) {
    if (!this.state.qrUrl) {
      Alert.alert("未找到VC交换方！");
      return;
    }
    addVC = JSON.parse(addVC);
    const selectedVCs = this.state.showVCS;
    if (selectedVCs.length > 0 && _.find(selectedVCs, { data: addVC.data })) {
      Alert.alert("已选择出示！");
      return null;
    }
    Modal.operation([
      {
        text: '全部出示', onPress: () => {
          addVC.showType = 0;
          selectedVCs.push(addVC);
          this.setState({ selectVC: selectedVCs });
        }
      },
      {
        text: '部分出示', onPress: () => {
          addVC.showType = 1;
          selectedVCs.push(addVC);
          this.setState({ selectVC: selectedVCs });;
        }
      },
      {
        text: '零知识', onPress: () => {
          addVC.showType = 2;
          selectedVCs.push(addVC);
          this.setState({ selectVC: selectedVCs });
        }
      },
    ]);
  }


  connectType() {
    Modal.operation([
      {
        text: '二维码', onPress: () => {
          this.props.navigation.navigate('QRCode', { callBack: this.qrcodeURL });
          return;
        }
      },
      {
        text: '蓝牙', onPress: () => {
          return;
        }
      },
      {
        text: 'NFC', onPress: () => {
          return;
        }
      },
    ]);
  }

  async getVCDetails(details: any) {
    this.props.navigation.navigate('VCDetails', { details: details });
  }

  qrcodeURL(url: string) {
    self.setState({ qrUrl: url });
    Alert.alert(`请您出示 \n a.身份证  b.健康证  c.酒店订单 `);
  }

  toLife() {
    setTimeout(() => {
      this.setState({ displayHotail: 'flex' });
    }, 5000);
    this.props.navigation.navigate('WebView');
  }

  async show() {
    if (self.state.showVCS.length === 0) {
      Alert.alert("请先选择出示VC！");
      return;
    }
    const res = await showVCToOthers(self.state.qrUrl, { presentation: self.state.showVCS });
    Alert.alert("出示成功！");
    self.setState({ showVCS: [] });
  }

  render() {
    const showVCS = this.state.showVCS.map((showVC) =>
      <Image key={showVC.data} source={{ uri: showVC.type === '0' ? "https://static.easyicon.net/preview/122/1227938.gif" : showVC.type === "1" ? "https://static.easyicon.net/preview/127/1274267.gif" : "https://static.easyicon.net/preview/124/1242416.gif" }} style={{ borderRadius: 10, backgroundColor: '#527fe4', width: 30, height: 30, margin: 5 }}></Image>
    );
    const customIcon = (
      <Image
        source={{
          uri: 'https://static.easyicon.net/preview/118/1180546.gif',
        }}
        style={{ width: 15, height: 15 }}
      />
    );
    return (
      <Flex direction='column' wrap="wrap" style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#CCCC00', height: 70, width: screen.width }}>
          <Flex direction='row' style={{ flex: 1 }}>
            <View ><Tag closable>全部 </Tag></View>
            <View ><Tag>证件</Tag></View>
            <View ><Tag>票据</Tag></View>
            <View style={{ paddingLeft: 30 }}><Button onPress={() => this.toLife()} title='衣食住行' /></View>
            <View style={{ paddingLeft: 5 }}><Button onPress={() => this.connectType()} title='VC交换' /></View>
          </Flex>
        </View>

        <ScrollView showsVerticalScrollIndicator={true}
          style={{
            backgroundColor: '#C0C0C0',
            height: (screen.height),
            width: screen.width
          }}>
          <Flex>
            <View style={{ marginTop: 0 }}>
              <NoticeBar icon={customIcon}
                onPress={() => Modal.alert('' + USER_DID.id, JSON.stringify(USER_DID), [{ text: 'ok' },])} style={{ width: screen.width }}
                marqueeProps={{ style: { fontSize: 12, color: 'red' } }}>
                {USER_DID.id}
              </NoticeBar>
            </View>
          </Flex>
          <Flex>
            <Flex.Item >
              <VCCard data={JSON.stringify(this.state.totalVCS[0])} addShowVC={(x: string) => { this.handleAddShowVC(x) }} getDetails={(details: string) => { this.getVCDetails(details) }}></VCCard>
            </Flex.Item>
            <Flex.Item >
              <VCCard data={JSON.stringify(this.state.totalVCS[1])} addShowVC={(x: string) => { this.handleAddShowVC(x) }} getDetails={(details: string) => { this.getVCDetails(details) }}></VCCard>
            </Flex.Item>
          </Flex>
          <Flex style={{ display: this.state.displayHotail }}>
            <Flex.Item >
              <VCCard data={JSON.stringify(this.state.totalVCS[2])} addShowVC={(x: string) => { this.handleAddShowVC(x) }} getDetails={(details: string) => { this.getVCDetails(details) }}></VCCard>
            </Flex.Item>
            <Flex.Item>
            </Flex.Item>
          </Flex>
        </ScrollView>
        <View style={{ height: 40, width: screen.width }}>
          <Flex direction='row' style={{ flex: 1 }}>
            <View>
              <ScrollView showsHorizontalScrollIndicator={true}
                horizontal={true}
                style={{ backgroundColor: '#999900', height: 40, width: screen.width - 100 }}>
                {showVCS}
              </ScrollView>
            </View>
            <TouchableOpacity onPress={() => this.show()}  >
              <View style={{ backgroundColor: '#2486B5', width: 100, height: 40 }}><Text style={{ margin: 8, marginLeft: 20, color: "white", alignContent: "center", fontSize: 20 }}>出     示</Text></View>
            </TouchableOpacity>
          </Flex>
        </View>
      </Flex>
    );
  };
};
const AppNavigator = createStackNavigator({
  Home: HomePage,
  WebView: MyWebView,
  QRCode: QRCodeScaner,
  VCDetails: VCDetailsView,
});

const AppContainer = createAppContainer(AppNavigator);
export default () => (
  <Provider>
    <AppContainer />
  </Provider>
);