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
    login(identifier: $identifier, password: $password) {
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

const EmailScreen: React.FC<EmailScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const handleLoginPress = () => {
    login({ variables: { identifier: email, password: 123 } });
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
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TouchableOpacity>
            <Text style={styles.loginWithPhoneText}>
              LOG IN / SIGN UP WITH PHONE NUMBER
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

export default EmailScreen;
