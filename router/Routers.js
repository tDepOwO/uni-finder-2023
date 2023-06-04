import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "../screens/Onboarding";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Login from "../screens/Login";
import Resgister from "../screens/Resgister";

const Stacks = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerRouter = () => {
  <Drawer.Navigator>
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      screenOptions={{ headerShown: false }}
    />
    <Drawer.Screen name="Screen1" component={Screen1} />
  </Drawer.Navigator>;
};

const Routers = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
        <Stacks.Screen name="Onboadring" component={Onboarding} />
        <Stacks.Screen name="Login" component={Login} />
        <Stacks.Screen name="Resgister" component={Resgister} />
        <Stacks.Screen name="Drawer" component={DrawerRouter} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default Routers;

const styles = StyleSheet.create({});
