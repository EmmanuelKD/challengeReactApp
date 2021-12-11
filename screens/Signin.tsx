// import { Block, theme } from "galio-framework";
import React from "react";
// import { List, Paragraph, Subheading } from "react-native-paper";
import {
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  SafeAreaView,
} from "react-native";
// import AboutTile from '../components/AboutComponent';

import CustomTextField from "../components/CustomTextField";
import LoginBG from "../assets/ReactSvg/LoginBg";
import LoadingButton from "../components/LoadingButton";
import SignupBtn from "../components/signupButton";
import { NavigationContainer } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");

class Signin extends React.Component {
  init = async () => {};

  componentDidMount() {}

  render() {
    return (
      // <NavigationContainer>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.main}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              // borderWidth: 2,
              // borderColor: "red",
            }}
          >
            <LoginBG />

            <CustomTextField
              style={{ marginTop: 10 }}
              onChange={() => {}}
              title="Email"
              keyboardType="email-address"
            />
            <CustomTextField
              onChange={() => {}}
              title="Password"
              keyboardType="visible-password"
              secureTextEntry={true}
            />
            <LoadingButton
              style={{ marginTop: 20 }}
              title="Signin"
              onClick={() => {}}
            />
            <SignupBtn title="Signup" onClick={() => {}} />
          </View>
        </ScrollView>
      </SafeAreaView>
      // </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 42,
  },
});

export default Signin;
