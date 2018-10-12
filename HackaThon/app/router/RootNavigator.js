import { createSwitchNavigator } from 'react-navigation';

import LoginNavigator from './LoginNavigator';
import MainTabsNavigator from './MainTabsNavigator';
 


export default createSwitchNavigator(
  {
    
    LoginNavigator,
    MainTabsNavigator,
  },
  {
    initialRouteName: 'LoginNavigator'
  }
);
