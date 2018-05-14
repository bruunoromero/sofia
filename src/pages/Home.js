import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, ToolbarAction } from "react-native-paper";

export class Home extends Component {
  static navigationOptions = {
    title: "teste",
    subtitle: "teste",
    headerRight: <ToolbarAction icon="search" />
  };
  render = () => (
    <View>
      <Button onPress={() => this.props.navigation.navigate("Second")}>
        Press me
      </Button>
    </View>
  );
}
