import { View, Text, KeyboardTypeOptions } from "react-native";

import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { COLORS } from "../constants/Theme";

type CustomTextFieldProps = {
  title: string;
  secureTextEntry?: boolean;
  style?:object;
  keyboardType: KeyboardTypeOptions;
  onChange: () => void;
};
export default function CustomTextField(props: CustomTextFieldProps) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  // const [hideTextval, obscureTet] = React.useState(true);
  const { title,style, keyboardType,secureTextEntry } = props;

  return (
    <SafeAreaView style={{...style}}>
      <View style={styles.main}>
        <Text style={{ color: COLORS.PRI, fontSize: 12 }}>{title}</Text>
        <TextInput
          style={styles.edittext}
          onChangeText={onChangeText}
          // value={text}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          placeholder={`Enter ${title}`}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: 365,
    height: 81,
    color: COLORS.PRI,
    margin: 12,
    padding: 10,
  },
  edittext: {
    padding: 10,
    borderWidth: 1,
    height: "100%",
    borderRadius: 5,
    borderColor: COLORS.PRI,
  },
});
