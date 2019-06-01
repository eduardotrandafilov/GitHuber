import "~/config/ReactotronConfig";
import "~/config/DevToolsConfig";
import { AppRegistry } from "react-native";
import App from "~/";
import { name as appName } from "./app.json";

console.tron.log("Carrega arquivo index.js");

AppRegistry.registerComponent(appName, () => App);
