import React, { Component } from "react";
import ToolBar from "./Components/Toolbar/index";
import SideDrawer from "./Components/SideDrawer/index";
import Backdrop from "./Components/SideDrawer/Backdrop/index";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  toggleDrawerHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };
  backDrawerHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <ToolBar onClickHandler={this.toggleDrawerHandler} />
        {this.state.sideDrawerOpen && (
          <SideDrawer show={this.state.sideDrawerOpen} />
        )}
        {this.state.sideDrawerOpen && (
          <Backdrop onbackDrawerHandler={this.backDrawerHandler} />
        )}
      </div>
    );
  }
}

export default App;
