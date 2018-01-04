import React from 'react';
import TabView from 'react-native-scrollable-tab-view';

import Categories from './Categories';
import CurrentWorkout from './CurrentWorkout';

const Main = () => (
  <TabView
    style={{ paddingBottom: 80, backgroundColor: 'white' }}
    tabBarTextStyle={{ marginBottom: 30, fontSize: 24 }}
    // tabBarBackgroundColor="white"
    tabBarPosition="overlayBottom"
    tabBarActiveTextColor="#1D62F0"
    tabBarUnderlineStyle={{
      marginBottom: 15,
      borderWidth: 2,
      borderColor: '#1D62F0',
    }}
    tabBarInactiveTextColor="#1D62F0"
  >
    <CurrentWorkout tabLabel="Current" />
    <Categories tabLabel="All" />
  </TabView>
);

export default Main;
