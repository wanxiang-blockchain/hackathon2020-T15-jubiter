import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { Card, WingBlank } from '@ant-design/react-native';

export interface VCCardProps {
  data: any,
  getDetails?: any,
  addShowVC?: any
}

export default class VCCard extends React.Component<VCCardProps> {

  constructor(props: VCCardProps) {
    super(props);

  }

  render() {
    return (
      <View style={{ paddingTop: 25 }}>
        <WingBlank size="lg" >
          <Card >
            <Card.Header
              thumbStyle={{ width: 25, height: 15, marginLeft: -10 }}
              thumb={JSON.parse(this.props.data).type === '0' ? "https://static.easyicon.net/preview/122/1227938.gif" : JSON.parse(this.props.data).type === "1" ? "https://static.easyicon.net/preview/127/1274267.gif" : "https://static.easyicon.net/preview/124/1242416.gif"}
            />
            <TouchableOpacity onPress={() => { this.props.getDetails(JSON.stringify(JSON.parse(this.props.data).details)) }}  >
              <Card.Body>
                <View style={{ height: 60 }}>
                  <Text style={{ marginLeft: 8 }}>{JSON.stringify(JSON.parse(this.props.data).details).slice(0, 60) + "  ..."}</Text>
                </View>
              </Card.Body>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.addShowVC(this.props.data) }} >
              <Card.Footer
                content=""
                extra="预出示"
              />
            </TouchableOpacity>
          </Card>
        </WingBlank>
      </View>
    );
  }
}