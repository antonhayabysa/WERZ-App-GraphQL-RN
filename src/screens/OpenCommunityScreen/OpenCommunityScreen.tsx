import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import styles from "./styles";

type OpenCommunityScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "OpenCommunityScreen"
>;

interface OpenCommunityScreenProps {
  navigation: OpenCommunityScreenNavigationProp;
}

const OpenCommunityScreen: React.FC<OpenCommunityScreenProps> = ({
  navigation,
}) => {
  const handleCommunityPress = () => {
    navigation.navigate("EventsListScreen");
  };

  return (
    <ImageBackground
      style={styles.image}
      source={require("../../../assets/BG.png")}
    >
      <View style={styles.container}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.item} onPress={handleCommunityPress}>
            <Image
              style={styles.imageItem}
              source={require("../../../assets/Group1.png")}
            />
            <Text style={styles.text}>Female Future </Text>
            <Text style={styles.text}>Sounds</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleCommunityPress}>
            <Image
              style={styles.imageItem}
              source={require("../../../assets/Group2.png")}
            />
            <Text style={styles.text}>Hera Sounds</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleCommunityPress}>
            <Image
              style={styles.imageItem}
              source={require("../../../assets/Group3.png")}
            />
            <Text style={styles.text}>Ikigai Sounds</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.item} onPress={handleCommunityPress}>
            <Image
              style={styles.imageItem}
              source={require("../../../assets/Group4.png")}
            />
            <Text style={styles.text}>Ludvig Vitton</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleCommunityPress}>
            <Image
              style={styles.imageItem}
              source={require("../../../assets/Group5.png")}
            />
            <Text style={styles.text}>Gucci Moon Club</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OpenCommunityScreen;
