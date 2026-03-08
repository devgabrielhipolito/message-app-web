import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

const tron = Reactotron.configure({ name: "MyApp" })
  .useReactNative()
  .use(reactotronRedux())
  .connect();

export default tron;
