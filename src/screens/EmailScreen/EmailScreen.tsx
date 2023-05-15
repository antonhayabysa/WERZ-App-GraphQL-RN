import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import styles from "./styles";

type EmailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "EmailScreen"
>;

interface EmailScreenProps {
  navigation: EmailScreenNavigationProp;
}

const EmailScreen: React.FC<EmailScreenProps> = ({ navigation }) => {
  const handleCommunityPress = () => {
    navigation.navigate("PasswordScreen");
  };
  return (
    <ImageBackground
      style={styles.image}
      source={require("../../../assets/Group.png")}
    >
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Text style={styles.loginText}>LOG IN WITH USERNAME</Text>
          <TextInput
            placeholder="youremail@email.com or username"
            keyboardType="email-address"
            style={styles.input}
          />
          <TouchableOpacity onPress={handleCommunityPress}>
            <Text style={styles.loginWithPhoneText}>
              LOG IN / SIGN UP WITH PHONE NUMBER
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleCommunityPress}
        >
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default EmailScreen;
