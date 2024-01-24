import { Dimensions } from "react-native"

const {width, height} = Dimensions.get("window")
export const Screen = {width, height}

export const Colors={
    primary:'#024DA6',
    secondary:"#ffffff",
    black:"#000000",
    white:"#ffffff",
    gray:"rgba(217, 217, 217, 0.37)",
    error:"red"
}