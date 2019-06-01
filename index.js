import "./src/config/ReactotronConfig";
import { AppRegistry } from "react-native";
import App from "./src";
import { name as appName } from "./app.json";

console.tron.log("Carrega arquivo index.js");

AppRegistry.registerComponent(appName, () => App);
