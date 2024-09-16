import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "../screens/Home";
import Developers from '../screens/Developers';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => { 
    return (
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Developers" component={Developers} />
        </Drawer.Navigator>
    )
}

export default DrawerRoutes;