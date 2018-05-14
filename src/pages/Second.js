import React, { Component } from "react";
import { View, Text } from "react-native";

export class Second extends Component {
  static navigationOptions = {
    title: "ola mundo"
  };
  render = () => (
    <View>
      <Text>Ola mundo</Text>
    </View>
  );
}
