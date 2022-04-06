import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation"
import Home from "../components/home";
import reviewDetails from "../components/reviewDetails";

const screens = {
    Home :{
        screen : Home
    },
    reviewDetails :{
        screen : reviewDetails
    }
}
const HomeStack=createStackNavigator(screens)

export default createAppContainer(HomeStack)