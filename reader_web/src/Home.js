import React, { Component } from "react";
import Header from "./Header";
import Center from "./Center";
import Trend from "./Trend";
import Upcoming from "./Upcoming";
import Popular from "./Popular";
import Choice from "./Choice";
import Play from "./Play";
import Stream from "./Stream";
import Footer from "./Footer";
 
class Home extends Component {
  render() {
    return (
        <div>
            <Header />
            <Center />
            <Trend />
            <Upcoming />
            <Popular />
            <Choice />
            <Play />
            {/* <Stream />
            <Footer /> */}
        </div>
    );
  }
}
 
export default Home;