import React from "react";
import {
  Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View
} from "react-native";
import { TransactionStatus } from "../schema/Transactions";
import { applyAlpha } from "../utils";
import TransactionList from "./TransactionListItem";
export default function ListItemMain() {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View>
          <Text style={{ fontSize: 20,margin:2 ,fontWeight:"bold" }}>Transactions</Text>
        </View>
        <View style={styles.container}>
          <ScrollView>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, ind) => {
              return (
                <TransactionList
                  key={ind}
                  onClick={() => { }}
                  amount="le1000"
                  id="0090394"
                  status={TransactionStatus.unknown}
                  toName="Samuel Kanu"
                />
              );
            })}

            {/* <NavButton onClick={()=>{}}/> */}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

  main: {
    // paddingVertical: 3,
  },
  container: {
    width: "100%",
    height: windowHeight * 0.55,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    // 
    // margin: 9,
    // backgroundColor: applyAlpha("#000000", 0.16),
  },
});
