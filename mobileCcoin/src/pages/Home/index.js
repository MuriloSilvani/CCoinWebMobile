import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';

import Header from '../../Components/Header';

export default function Home({ navigation }) {

    const usuarioLogado = useSelector(state => state.usuarioLogado);

    return (
        <View>
            <Header page='Home' navigation={navigation} />

        </View>
    );
};