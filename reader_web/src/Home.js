import React, { Component } from "react";
import Header from "./Header";
import Center from "./Center";
import Trend from "./Trend";
 
class Home extends Component {
  render() {
    return (
        <div>
            <Header />
            <Center />
            <Trend />
        </div>
    );
  }
}
 
export default Home;