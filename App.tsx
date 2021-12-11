// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import * as React from "react";
// import { StyleSheet } from "react-native";
// import {
//   AuthContextConsumer,
//   AuthContextProvider
// } from "./authcontext/Auth_State";
// import Dashboard from "./screens/Dashboard";
// import Signin from "./screens/Signin";
// import Signup from "./screens/Signup";
// import TransactionView from "./screens/Transaction";
// import Test from "./components/BottomNav"

// export default function App() {
//   const Stack = createStackNavigator();
//   return (
//     <Test/>
// <AuthContextProvider>

//   <AuthContextConsumer>
//     {(context) => {

//       return (

//         <NavigationContainer>
//           <Stack.Navigator
//             initialRouteName="SignIn"
//             screenOptions={{

//               // header: CustomNavigationBar,
//             }}
//           >

//             {!context.isAuthenticated ? <>
//               <Stack.Screen name="SignIn" component={Signin} />
//               <Stack.Screen name="SignUp" component={Signup} />
//             </>
//               :
//               <>
//                 <Stack.Screen name="Dashboard" component={Dashboard} />
//                 <Stack.Screen name="Transaction" component={TransactionView} />
//               </>
//             }
//           </Stack.Navigator>
//         </NavigationContainer>
//       )
//     }}
//   </AuthContextConsumer>

// </AuthContextProvider>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// import { View, StyleSheet, Dimensions } from "react-native";
// import * as React from "react";
// import { MaterialIcons } from "@expo/vector-icons";
// import { COLORS } from "../../constants/Theme";
// import TransferButton from "./TransferButton";

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// type RefreshIconButtonProps = {
//   onClick: () => void;
// };
// export default function BottomNav(props: RefreshIconButtonProps) {
//   return (
//     <View style={styles.main}>
//       <View style={styles.container}></View>
//       <View
//         style={{
//           zIndex: 2,
//           display:"flex",
//           position: "relative",
//           justifyContent: "center",
//           alignSelf: "center",
//           width:windowWidth
//          }}
//       >
//         <TransferButton onClick={() => {}} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   main: {
//     width: "100%",
//     height: 120,
//     position: "absolute",
//     bottom: 0,
//     display: "flex",
//     borderWidth: 2, 
//   },
//   container: {
//     width: "100%",
//     borderWidth: 2,
//     height: 65,
//     position: "absolute",
//     bottom: 0,
//     backgroundColor: COLORS.PRI,
//   },
// });


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleProp, StyleSheet, TabBarIOSItem, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Plus...
// import plus from './assets/plus.png'
import { MaterialIcons } from "@expo/vector-icons";

// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';
import Dashboard from './screens/Dashboard';
import { COLORS } from './constants/Theme';
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContextConsumer, AuthContextProvider } from './authcontext/Auth_State';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import TransactionView from './screens/Transaction';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Hiding Tab Names...
function Index(
  { navigation, back }: { navigation: any, back: any }
  ) {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    < >
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        // Floating Tab Bar...
        style: {
          backgroundColor: COLORS.PRI, 
          position: 'absolute',
          bottom: 0,
          // marginHorizontal: 20,
          // Max Height...
          height: 60,

          // borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          // paddingHorizontal: 20,
        }
      }}>

        {
          // Tab Screens....

          // Tab ICons....
        }
        <Tab.Screen name={"Dashboard"} component={Dashboard} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <MaterialIcons
                name="dashboard"
                size={20}
                color={focused ? '#fff' : COLORS.TXT}
              ></MaterialIcons>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Search"} component={EmptyScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="search"
                size={20}
                color={focused ? '#fff' : COLORS.TXT}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>


        {

          // Extra Tab Screen For Action Button..
        }

        <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
          tabBarIcon: ({ focused }) => (

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Transaction")
              }}>
              <View style={{
                borderWidth: 3,
                borderColor: "#fff",
                width: 65,
                height: 65,
                backgroundColor: COLORS.SEC,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 50 : 30,
                // shadowColor: '#f0f0f0f0',
                // shadowOffset: {
                //   width: 0,
                //   height: 3
                // },
                // shadowRadius: 5,
                // shadowOpacity: 1.0,
              }}>
                <MaterialIcons
                  name="send"
                  size={30}
                  color={"#fff"}
                  style={styles.icon}
                />
             
              </View>
            </TouchableOpacity>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Notifications"} component={EmptyScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="bell"
                size={20}
                color={focused ? '#fff' : COLORS.TXT}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>



        <Tab.Screen name={"Settings"} component={EmptyScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="user-alt"
                size={20}
                color={focused ? '#fff' : COLORS.TXT}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

      </Tab.Navigator>

      {/* <Animated.View style={{
        width: getWidth() - 20,
        height: 2,
        backgroundColor: COLORS.TXT,
        position: 'absolute',
        bottom: 58,
        zIndex:1,
        // Horizontal Padding = 20...
        left: 50,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View> */}
    </ >
  );
}

function getWidth() {
  let width = Dimensions.get("window").width

  width = width - 80

  return width / 5
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}



const styles = StyleSheet.create({
  icon: {
    transform: [{ rotate: "-30deg" }],

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




export default function App() {
  return (

    <AuthContextProvider>

      <AuthContextConsumer>
        {(context) => {

          return (


            <NavigationContainer>
              <Stack.Navigator
              // initialRouteName="SignIn"
              // screenOptions={{
              //   // header: CustomNavigationBar,
              // }}
              >
                {!context.isAuthenticated ? <>
                  <Stack.Screen name="SignIn" component={Signin} />
                  <Stack.Screen name="SignUp" component={Signup} />
                </>
                  :
                  <>
                    <Stack.Screen name="Dashboard" component={Index} />
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
}


// function TabScreen({ tabOffsetValue, title, Screen, renderTextORIcon }: {
//   tabOffsetValue: Animated.Value,
//   title: string,
//   Screen: React.ComponentType<any>,
//   renderTextORIcon: (props: any) => React.ReactElement<any>,
//   // IcoOrTitleFocusStyle:StyleProp<ViewStyle>
//   // IcoOrTitleNormalStyle:StyleProp<ViewStyle>
// }): Tab.Screen {


//   return (
//     <Tab.Screen name={title} component={Screen} options={{
//       tabBarIcon: ({ focused }) => (
//         <View style={{
//           // centring Tab Button...
//           position: 'absolute',
//           top: 20
//         }}>
//           {
//             () => renderTextORIcon(focused)
//           }
//           {/* <View style={focused? IcoOrTitleFocusStyle : IcoOrTitleNormalStyle}>
//           {}
//           </View> */}
//           {/* <FontAwesome5
//             name="bell"
//             size={20}
//             color={focused ? '#fff':COLORS.TXT }
//           ></FontAwesome5> */}
//         </View>
//       )
//     }} listeners={({ navigation, route }) => ({
//       tabPress: e => {
//         Animated.spring(tabOffsetValue, {
//           toValue: getWidth() * 3,
//           useNativeDriver: true
//         }).start();
//       }
//     })}></Tab.Screen>
//   );
// }