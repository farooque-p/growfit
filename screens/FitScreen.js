import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Image,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FitnessItems } from "../Context";

const FitScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  //console.log("Exercies Array : ", route.params);
  const excersises = route.params.excersises;
  const [index, setIndex] = useState(0);
  const current = excersises[index];
  //console.log("First Excericse : ", current);

  const {
    completed,
    setCompleted,
    workout,
    setWorkout,
    calories,
    setCalories,
    minutes,
    setMinutes,
  } = useContext(FitnessItems);
  console.log("Complted Exercises : ", completed);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? 40 : 0,
      }}
    >
      <Image
        style={{ width: "100", height: 370 }}
        source={{ uri: current.image }}
      />
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {current.name}
      </Text>
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        x{current.sets}
      </Text>
      {index + 1 >= excersises.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            backgroundColor: "blue",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            padding: 10,
            borderRadius: 30,
            width: 150,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: 500,
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Done
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed, current.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.5);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "blue",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            padding: 10,
            borderRadius: 30,
            width: 150,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: 500,
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Done
          </Text>
        </Pressable>
      )}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          gap: 10,
          marginTop: 50,
        }}
      >
        <Pressable
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("Rest");
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "green",
            padding: 10,
            width: 100,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: 500,
              fontSize: 16,
            }}
          >
            Prev
          </Text>
        </Pressable>
        {index + 1 >= excersises.length ? (
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={{
              backgroundColor: "green",
              padding: 10,
              width: 100,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              Skip
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("Rest");
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={{
              backgroundColor: "green",
              padding: 10,
              width: 100,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              Skip
            </Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FitScreen;
