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

const HomePage = () => {
  const event1 = {
    name: "Summer Weekends",
    type: EVENT_WEEK_TYPE,
    period: 1,
    end: "2023-11-30",
    start: "2023-09-01",
  }
  
  return (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar>
      <NavLeft>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle>Countdown</NavTitle>
    </Navbar>

    <CountdownBlock event={event1}/>
    <StatsTabs/>
    <LastWorkout/>


  </Page>
)};
export default HomePage;