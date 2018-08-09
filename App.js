import {Navigation} from "react-native-navigation";
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";

Navigation.registerComponent("album.AuthScreen" , () => AuthScreen);
Navigation.registerComponent("album.SharePlaceScreen" , () => SharePlaceScreen);
Navigation.registerComponent("album.FindPlaceScreen" , () => FindPlaceScreen);
Navigation.startSingleScreenApp(
  {
    screen: {
      screen : "album.AuthScreen",
      title: "Login"
    }
  });