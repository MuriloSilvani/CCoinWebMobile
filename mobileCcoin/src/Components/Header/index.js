import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({ navigation, page }) {
    return (
        <View style={style.headerView}>
            <TouchableOpacity
                onPress={() => { navigation.openDrawer(); }}
            >
                <Icon style={style.iconeMenu} name='menu' />
            </TouchableOpacity>
            <Text style={style.tituloMenu}>
                {page}
            </Text>

            <TouchableOpacity
                onPress={() => { navigation.navigate('Login') }}
            >
                <Text style={style.logout}>Sair</Text>
            </TouchableOpacity>

        </View>
    );
}