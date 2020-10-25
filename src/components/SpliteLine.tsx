import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

interface ISpliteLineProps {
    lineHeight: number;
    color:string;
    style:any;
    contentStyle:any;
}

class SpliteLine extends PureComponent<ISpliteLineProps> {
  render () {
    let { lineHeight, color, style, contentStyle } = this.props
    return (
      <View style={{ backgroundColor: 'white', ...contentStyle }}>
        <View style={[{ height: 0, borderTopWidth: lineHeight, borderColor: color, opacity: 0.7, margin: StyleSheet.hairlineWidth }, style]} />
      </View>
    )
  }
}

var SpliteLineDefaultProps:ISpliteLineProps = {
  lineHeight: StyleSheet.hairlineWidth,
  color: '#bdbdbd',
  style:{},
  contentStyle: {}
}

export {SpliteLine,SpliteLineDefaultProps};