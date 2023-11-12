import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import FitnessCard from "../components/FitnessCard";
import { FitnessItems } from "../Context";
import { SliderBox } from "react-native-image-slider-box";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const slides = [
    "https://res.cloudinary.com/duivztddr/image/upload/v1699726703/fitness/slider/slide1_ou5ge7.png",
    "https://res.cloudinary.com/duivztddr/image/upload/v1699726704/fitness/slider/slide2_tfxigi.png",
    "https://res.cloudinary.com/duivztddr/image/upload/v1699726703/fitness/slider/slide3_p4dhrg.png",
    "https://res.cloudinary.com/duivztddr/image/upload/v1699726703/fitness/slider/slide4_rbejhb.png",
  ];
  const { workout, calories, minutes } = useContext(FitnessItems);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 100 }}>
      <View style={{alignItems:"center"}}>
        <MaterialCommunityIcons style={{backgroundColor:"black",  borderRadius:50, padding:8}} name="dumbbell" size={48} color="white" />
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            marginVertical: 20,
            fontWeight: 900,
          }}
        >
          HOME WORKOUTS
        </Text>
      </View>

      <SliderBox
        images={slides}
        autoPlay
        circleLoop
        dotColor={"#13274F"}
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{ width: "100%" }}
      />
      {/* Statistics */}
      <View
        style={{
          justifyContent: "center",
          gap: 8,
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 20,
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 30,
            width: 175,
            height: 175,
            borderRadius: 100,
            backgroundColor: "#4850FF",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {workout}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
            }}
          >
            WORKOUTS
          </Text>
        </View>
        <View
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 30,
            width: 175,
            height: 175,
            borderRadius: 100,
            backgroundColor: "#2AFA3E",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {calories}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
            }}
          >
            CALORIES
          </Text>
        </View>
        <View
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 30,
            width: 175,
            height: 175,
            borderRadius: 100,
            backgroundColor: "#FBA500",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {minutes}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
            }}
          >
            MINUTES
          </Text>
        </View>
      </View>
      {/* Cards */}
      <FitnessCard />
    </ScrollView>
  );
};

export default HomeScreen;
