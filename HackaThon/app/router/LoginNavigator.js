
import { createStackNavigator } from "react-navigation";
import LoginScreen from '../containers/login/LoginScreen'
 
const LoginNavigator = createStackNavigator({
  LoginScreen: LoginScreen, 
},{
    headerMode:'none',  
});


export default LoginNavigator;
