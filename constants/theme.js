import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const SIZES = {
    W:Dimensions.get("window").width,
    H:Dimensions.get("window").height,
}

export const COLORS = {
    yellow:'#121212',
    pink:'#ececec'
}

const appTheme = { COLORS, SIZES };