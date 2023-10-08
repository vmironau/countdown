import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  Link,
} from 'framework7-react';
import CountdownBlock from "./cd-block";
import StatsTabs from "./stats-tabs";
import LastWorkout from "./last-workout";

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar>
      <NavLeft>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle>Countdown</NavTitle>
    </Navbar>

    <CountdownBlock/>
    <StatsTabs/>
    <LastWorkout/>


  </Page>
);
export default HomePage;