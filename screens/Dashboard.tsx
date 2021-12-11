// import { Block, theme } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
 import { SafeAreaView, StyleSheet, View,Text } from "react-native";
import AmountBadge from "../components/BalanceBadge/AmountBadge";
import ListItemMain from "../components/ListItemMain";
 
class Dashboard extends React.Component {
 
  componentDidMount() {}

  render() {
    return (
      // <NavigationContainer>

      <SafeAreaView>
        <View>
        <AmountBadge />
                    <ListItemMain />

        </View>
     </SafeAreaView>
    //  </NavigationContainer>

    );
  }
}

//  {/*  */}

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

export default Dashboard;
