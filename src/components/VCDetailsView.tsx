import React from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
const screen = Dimensions.get("screen");
export interface VCProps {
  navigation: NavigationStackProp
}

export default class VCDetailsView extends React.Component<VCProps> {
  constructor(props: VCProps) {
    super(props);

  }
  render() {
    return (
      <View style={{
        backgroundColor: "#fff",
        flex: 1,
      }}>
        <ScrollView showsVerticalScrollIndicator={true}
          style={{
            backgroundColor: '#fff',
            height: (screen.height),
            width: screen.width
          }}>
          <Text style={{ margin: 30, alignContent: "center", fontSize: 15 }}>
            {this.props.navigation.getParam("details")}
          </Text>
        </ScrollView>
      </View>
    )
  }
}