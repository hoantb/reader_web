import React, { Component } from "react";
import Header from "./Header";
import Center from "./Center";
 
class Home extends Component {
  render() {
    return (
        <div>
            <Header />
            <Center />
        </div>
    );
  }
}
 
export default Home;