import React, { Component } from "react";
import { Toolbar } from "react-native-paper";
import { createStackNavigator } from "react-navigation";

import { Home } from "./src/pages/Home";
import { Second } from "./src/pages/Second";
import { Header } from "./src/components/Header";

export default createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Second: {
      screen: Second
    }
  },
  {
    headerMode: "screen",
    navigationOptions: {
      header: props => {
        return <Header {...props} />;
      }
    }
  }
);
