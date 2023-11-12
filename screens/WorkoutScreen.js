import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Image,
  Pressable,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FitnessItems } from "../Context";

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);

  //console.log(route.params);
  return (
    <>
      <ScrollView
      showsVerticalScrollIndicator={false}
        style={{
          flex:1,
          backgroundColor: "white",
          paddingTop: Platform.OS === "android" ? 40 : 0,
        }}
      >
        <Image
          source={{ uri: route.params.image }}
          style={{ width: "100%", height: 170 }}
        />
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-sharp"
          size={24}
          color="white"
          style={{ position: "absolute", left: 20, top: 20 }}
        />

        {route.params.excersises.map((item, index) => (
          <View
            style={{
              margin: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderColor:"#E0E0E0",
              borderWidth:1,
              padding:10,
              borderRadius:8,
            }}
            key={index}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={{ uri: item.image }}
            />
            <View style={{ marginLeft: 10, flex: 1 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ marginTop: 4, fontSize: 18, color: "gray" }}>
                x{item.sets}
              </Text>
            </View>
            {completed.includes(item.name) ? (
              <AntDesign name="checkcircle" size={24} color="green" />
            ) : null}
          </View>
        ))}
      </ScrollView>
      <Pressable
        onPress={() => {
          navigation.navigate("Fit", {
            excersises: route.params.excersises,
          });
          setCompleted([]);
        }}
        style={{
          backgroundColor: "blue",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          width: 120,
          borderRadius: 6,
          marginVertical: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          START
        </Text>
      </Pressable>
    </>
  );
};

export default WorkoutScreen;
