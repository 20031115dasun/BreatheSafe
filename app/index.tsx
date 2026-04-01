import React from 'react';
import {Redirect} from "expo-router";


const Index = () => {

    const isLoggedIn = false

  return isLoggedIn
    ? <Redirect href='/(tabs)' />:
      <Redirect href="/(auth)/login"/>
};

export default Index;