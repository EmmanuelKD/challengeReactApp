// import { Block, theme } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import AmountBadge from "../components/BalanceBadge/AmountBadge";
import ListItemMain from "../components/ListItemMain";

class Dashboard extends React.Component {

  componentDidMount() { }

  render() {
    return (
      // <NavigationContainer>

      <SafeAreaView style={styles.main}
      >
        <View>
          <AmountBadge />
          <View style={styles.inbetween}></View>
          <ListItemMain />

        </View>
      </SafeAreaView>
      //  </NavigationContainer>

    );
  }
}

//  {/*  */}

const styles = StyleSheet.create({
  inbetween: {
    flex: 1
  },
  main: {
    // margin: 12,  or

    paddingHorizontal: 9,
    position: "relative",
    display: "flex", justifyContent: "space-evenly",
    alignItems: "center", flexDirection: "column", flexWrap: "nowrap"
    ,
    marginBottom: 70,
    marginTop: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default Dashboard;
