import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../CardReducer";
import CardResult from "../components/CardResult";

const Screen1 = () => {
  const navigation = useNavigation();
  const card = useSelector((state) => state.card.card);
  const [sortedItems, setSortedItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    sortItems();
  }, [card]);

  const sortItems = () => {
    const sortedItems = [...card].sort((a, b) => {
      if (sortOrder === "ascending") {
        return a.ranking - b.ranking; // Sắp xếp tăng dần
      } else {
        return b.ranking - a.ranking; // Sắp xếp giảm dần
      }
    });
    setSortedItems(sortedItems);
  };

  return (
    <View>
      <View
        style={{
          paddingTop: 60,
          backgroundColor: "#F9F4EE",
          height: 200,
          borderRadius: 25,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 29,
          }}
        >
          <AntDesign
            name="arrowleft"
            size={30}
            color="#1C6D64"
            onPress={() => navigation.goBack()}
          />
          <Ionicons name="bookmark" size={30} color="#1C6D64" />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 28,
            marginTop: 24,
          }}
        >
          <Text
            style={{
              width: 290,
              fontSize: 20,
              fontWeight: "900",
              color: "#1C6D64",
            }}
          >
            Top 100 Đại học Vn
          </Text>
        </View>
      </View>
      <ScrollView style={{ alignSelf: "center", marginTop: 20 }}>
        {sortedItems.map((item, index) => (
          <CardResult item={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
