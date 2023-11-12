import { View, Text, Pressable, Image } from "react-native";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCard = () => {
  const navigation = useNavigation();

  const FitnessData = fitness;
  return (
    <View>
      {FitnessData.map((item, index) => (
        <Pressable
          onPress={() =>
            navigation.navigate("Workout", {
              image: item.image,
              excersises: item.excersises,
              id: item.id,
            })
          }
          key={index}
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            paddingTop: 10,
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: "95%", height: 200, borderRadius: 7 }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
              position: "absolute",
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "white",
              position: "absolute",
              left: 20,
              top: 40,
            }}
          >
            {item.description}
          </Text>
          <MaterialCommunityIcons
            style={{
              position: "absolute",
              color: "white",
              bottom: 20,
              left: 20,
            }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCard;
