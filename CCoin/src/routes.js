import React from 'react';

import './assets/style';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import Login from './pages/Login';

import Home from './pages/Home';
import Extrato from './pages/Extrato';
import MeuPerfil from './pages/MeuPerfil';
import Resgate from './pages/Resgate';
import Transferencia from './pages/Transferencia';

import Menu from './Components/Menu';

function Pages() {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#fff',
                activeBackgroundColor: '#ffb500',
            }}
            drawerContent={Menu}
        >

            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Extrato' component={Extrato} />
            <Drawer.Screen name='Resgate' component={Resgate} />
            <Drawer.Screen name='Transferencia' component={Transferencia} />
            <Drawer.Screen name='Meu Perfil' component={MeuPerfil} />
        </Drawer.Navigator>
    );
}

export default function Routes() {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Pages' component={Pages} />
        </Stack.Navigator>
    );
};