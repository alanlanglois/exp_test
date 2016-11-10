import {
  createRouter,
} from '@exponent/ex-navigation';

import LobyScreen from '../scenes/LobyScreen';
import LoginScreen from '../scenes/LoginScreen';
import CreateUserScreen from '../scenes/CreateUserScreen';

export default createRouter(() => ({
  LobyScreen: () => LobyScreen,
  LoginScreen: () => LoginScreen,
  CreateUserScreen: () => CreateUserScreen,
}));
