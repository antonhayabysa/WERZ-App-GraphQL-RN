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

const PasswordScreen: React.FC<EmailScreenProps> = ({ navigation }) => {
  const handleCommunityPress = () => {
    navigation.navigate("OpenCommunityScreen");
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      style={styles.image}
      source={require("../../../assets/Group.png")}
    >
      <View style={styles.outerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Text style={styles.backButtonText}>GO BACK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Text style={styles.loginText}>ENTER YOUR PASSWORD</Text>
          <TextInput
            placeholder="password"
            keyboardType="email-address"
            style={styles.input}
          />
          <TouchableOpacity onPress={handleCommunityPress}>
            <Text style={styles.loginWithPhoneText}>
              FORGOT PASSWORD? CLICK HERE
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

export default PasswordScreen;
