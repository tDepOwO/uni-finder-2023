import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import Screen1 from "./screens/Screen1";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./screens/Onboarding";
import Login from "./screens/Login";
import Resgister from "./screens/Resgister";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import Screen2 from "./screens/Screen2";
import DetailScreen from "./screens/DetailScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import CustomDrawer from "./components/CustomerDrawer";
import Location from "./screens/Location";
import { Provider } from "react-redux";
import store from "./store";

const Stacks = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      useLegacyImplementation
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "#C8E1DE" },
        headerTitle: "Unix",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerActiveBackgroundColor: "#C8E1DE",
          drawerLabelStyle: {
            color: "#1C6D64",
            fontWeight: "900",
            fontSize: 32,
            marginTop: 86,
          },
          drawerLabel: "Unix",
        }}
      />
      <Drawer.Screen
        name="Screen1"
        component={Screen1}
        options={{
          drawerActiveBackgroundColor: "#F9F4EE",
          drawerLabelStyle: {
            color: "#1C6D64",
            fontWeight: "500",
            fontSize: 16,
          },
          drawerLabel: "Top 100 Đại Học Vn",
          drawerIcon: () => {
            return <Fontisto name="pie-chart-1" size={20} color="#1C6D64" />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stacks.Navigator screenOptions={{ headerShown: false }}>
          <Stacks.Screen name="Onboadring" component={Onboarding} />
          <Stacks.Screen name="Login" component={Login} />
          <Stacks.Screen name="Resgister" component={Resgister} />
          <Stacks.Screen name="Detail" component={DetailScreen} />
          <Stacks.Screen name="Bookmark" component={BookmarkScreen} />
          <Stacks.Screen name="Location" component={Location} />
          <Stacks.Screen name="Drawer" component={MyDrawer} />
        </Stacks.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
