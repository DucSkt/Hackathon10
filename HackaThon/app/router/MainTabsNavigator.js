import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
 
 
import MaintainTabNavigator from "./MaintainTabNavigator";
 
const MainTabsNavigator = createBottomTabNavigator(
  {
 
    MaintainTab: MaintainTabNavigator,

  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);
export default MainTabsNavigator;
