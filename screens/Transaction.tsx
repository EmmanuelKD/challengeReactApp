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
import BottomRignt from "../assets/ReactSvg/ButtomRightStyle";

import CustomTextField from "../components/CustomTextField";
import LoginBG from "../assets/ReactSvg/LoginBg";
import LoadingButton from "../components/LoadingButton";
import { NavigationContainer } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");

class TransactionView extends React.Component {
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
              zIndex: 1,
              // borderWidth: 2,
              // borderColor: "red",
            }}
          >
            <CustomTextField
              style={{ marginTop: 20 }}
              onChange={() => {}}
              title="To ref"
              keyboardType="email-address"
            />
            <CustomTextField
              onChange={() => {}}
              title="Amount"
              keyboardType="visible-password"
              secureTextEntry={true}
            />
            <CustomTextField
              onChange={() => {}}
              title="Pin"
              keyboardType="visible-password"
              secureTextEntry={true}
            />

            <LoadingButton
              style={{ marginTop: 20 }}
              title="Pay"
              onClick={() => {}}
            />
          </View>
          <View
            style={{ position: "absolute", bottom: 0, right: 0, zIndex: 0 }}
          >
            <BottomRignt />
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

export default TransactionView;
