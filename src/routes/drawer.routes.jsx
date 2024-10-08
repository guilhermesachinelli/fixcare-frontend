import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "../screens/Home";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => { 
    return (
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    )
}

export default DrawerRoutes;