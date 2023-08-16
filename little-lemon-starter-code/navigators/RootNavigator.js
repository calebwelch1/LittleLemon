import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
          <Stack.Screen
          options={{
            title:'Welcome',
            headerTitleAlign: 'center',
            headerTitleStyle:{
              fontWeight: 'bold',
            },
          }}
          name="W"
          component={WelcomeScreen}
          />
        <Stack.Screen
        name="S"
        options={{
          title:'Subscribe',
          headerTitleAlign: 'center',
          headerTitleStyle:{
            fontWeight: 'bold',
          },
        }}
        component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
