import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Header from '../../Components/Header';

export default function MeuPerfil({ navigation }) {
    return (
        <View>
            <Header page='Meu Perfil' navigation={navigation} />

        </View>
    );
};