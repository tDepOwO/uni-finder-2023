import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1, paddingTop: 10 }}>
          <DrawerItemList {...props} />
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 18,
                justifyContent: "space-between",
                marginHorizontal: 17,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Location")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons name="md-location-sharp" size={24} color="#1C6D64" />
                <Text style={styles.sidebarItem}>Khu vực</Text>
              </TouchableOpacity>
              <AntDesign
                name="down"
                size={20}
                color="#1C6D64"
                onPress={toggleDropdown}
              />
            </View>

            {isDropdownOpen && (
              <View style={styles.dropdown}>
                <TouchableOpacity style={styles.dropdownItem}>
                  <Text>Hà Nội</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem}>
                  <Text>TP.Hồ Chí Minh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem}>
                  <Text>Đà Nẵng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem}>
                  <Text>Khu vực khác</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 35,
                justifyContent: "space-between",
                marginHorizontal: 17,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Location")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons name="md-location-sharp" size={24} color="#1C6D64" />
                <Text style={styles.sidebarItem}>Khu vực</Text>
              </TouchableOpacity>
              <AntDesign
                name="down"
                size={20}
                color="#1C6D64"
                onPress={toggleDropdown}
              />
            </View>

            {isDropdownOpen && (
              <View style={styles.dropdown}>
                <TouchableOpacity style={styles.dropdownItem}>
                  <Text>Hà Nội</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem}>
                  <Text>TP.Hồ Chí Minh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem}>
                  <Text>Đà Nẵng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem}>
                  <Text>Khu vực khác</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={signOutUser} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  container: {},
  sidebarItem: {
    color: "#1C6D64",
    fontWeight: "500",
    fontSize: 16,
    marginLeft: 29,
  },
  dropdown: {
    backgroundColor: "#F9F4EE",
    padding: 10,
    paddingHorizontal: 70,
  },
  dropdownItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});
