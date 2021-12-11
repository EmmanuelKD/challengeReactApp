import React from "react";
import { AuthProps, AuthState } from "./Aith_Types";
import { AuthContext } from "./AuthContext";
 
 
class AuthContextProvider extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    // const { db, auth, getDocs } = initializeApp();

    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {}

  loadPreference = async () => {};

  Login=async ()=>{

  }

  SignUp= async()=>{

  }
  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuthenticated:this.state.isLoggedIn,
          login:this.Login,
          signup:this.SignUp,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthContextConsumer = AuthContext.Consumer;
export { AuthContextProvider, AuthContextConsumer };

