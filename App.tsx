import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import {
  AuthContextConsumer,
  AuthContextProvider
} from "./authcontext/Auth_State";
import Dashboard from "./screens/Dashboard";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import TransactionView from "./screens/Transaction";


export default function App() {
  const Stack = createStackNavigator();
  return (
    <AuthContextProvider>

      <AuthContextConsumer>
        {(context) => {

          return (

            <NavigationContainer>
              <Stack.Navigator>

                {context.isAuthenticated ? <>
                  <Stack.Screen name="SignIn" component={Signin} />
                  <Stack.Screen name="SignUp" component={Signup} />
                </>
                  :
                  <>
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen name="Transaction" component={TransactionView} />
                  </>
                }
              </Stack.Navigator>
            </NavigationContainer>
          )
        }}
      </AuthContextConsumer>

    </AuthContextProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
