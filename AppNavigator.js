import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CenteredImage from './screens/Onboarding/Onboarding5';
import Onboard6 from './screens/Onboarding/Onboarding6';
import Onboard7 from './screens/Onboarding/Onboarding7';
import Onboard8 from './screens/Onboarding/Onboarding8';
import LoginScreen from './screens/LogInScreens/LogIn';
import OTPScreen from './screens/LogInScreens/OTPScreen';
import ForgotpasswordScreen from './screens/ForgotPassword/ForgotPassword';
// import GettingStarted05 from './GettingStartedScreens/GettingStarted05';
// import GettingStarted06 from './GettingStartedScreens/GettingStarted06';
// import GettingStarted08 from './GettingStartedScreens/GettingStarted08';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
    
      <Stack.Screen
        name="CenteredImage"
        component={CenteredImage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboard6"
        component={Onboard6}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboard7"
        component={Onboard7}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboard8"
        component={Onboard8}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotpasswordScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="GettingStarted05"
        component={GettingStarted05}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GettingStarted06"
        component={GettingStarted06}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GettingStarted08"
        component={GettingStarted08}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
