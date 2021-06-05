import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
} from 'react-native';

export default class GlobalButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          heigh: 45,
          width: '100%',
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : '#fff',
        }}>
        <Text>{this.props.text ? this.props.text : 'HEllo Button'}</Text>
      </TouchableOpacity>
    );
  }
}
