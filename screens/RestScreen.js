import { View, Text, SafeAreaView, Platform, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const RestScreen = () => {
  const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(3);

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };
  useEffect(() => {
    startTime();
    return () => clearTimeout(timer);
  });

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 40 : 0 }}>
      <Image
        style={{ width: "100%", height: 420 }}
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
      />
      <Text
        style={{
          textAlign: "center",
          marginTop: 50,
          fontSize: 30,
          fontWeight: 900,
        }}
      >
        TAKE A BREAK!
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 50,
          fontSize: 30,
          fontWeight: 900,
        }}
      >
        {timeLeft}
      </Text>
    </SafeAreaView>
  );
};

export default RestScreen;
