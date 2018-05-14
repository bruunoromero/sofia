import React, { Component } from "react";
import { Toolbar, ToolbarContent, ToolbarBackAction } from "react-native-paper";

export class Header extends Component {
  goBack = () => {
    this.props.navigation.goBack(this.props.scene.route.key);
  };

  render() {
    const {
      index,
      descriptor: { options }
    } = this.props.scene;
    return (
      <Toolbar>
        {index > 0 && <ToolbarBackAction onPress={this.goBack} />}
        {options.headerLeft}
        <ToolbarContent {...options} />
        {options.headerRight}
      </Toolbar>
    );
  }
}
