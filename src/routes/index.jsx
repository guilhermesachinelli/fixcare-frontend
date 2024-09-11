import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';

import StackRoutes from "./stack.routes";
import DrawerRoutes from "./drawer.routes";

export default function Routes() {
    return (
        <NavigationContainer>
            <DrawerRoutes />
            {/*<StackRoutes />*/}
            <StatusBar style="auto" />
        </NavigationContainer>
    )
}