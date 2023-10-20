import React, { useState } from "react";
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
import { gql, useMutation } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation Login($identifier: String!, $password: String!) {
    login(identifier: 123, password: 123) {
      token
      user {
        id
        username
      }
      communities {
        id
        name
      }
      errors {
        ... on TranslatableError {
          path
        }
      }
    }
  }
`;

type EmailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "EmailScreen"
>;

interface EmailScreenProps {
  navigation: EmailScreenNavigationProp;
}

const PasswordScreen: React.FC<EmailScreenProps> = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const handleLoginPress = () => {
    if (password === "123") {
      login({ variables: { identifier: 123, password } });
      navigation.navigate("OpenCommunityScreen");
    } else {
      console.log("Неверный пароль");
    }
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
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity>
            <Text style={styles.loginWithPhoneText}>
              FORGOT PASSWORD? CLICK HERE
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default PasswordScreen;
