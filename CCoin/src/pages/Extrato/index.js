import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

import Header from '../../Components/Header';

import { apiExchanges } from '../../services/api';

export default function Extrato({ navigation }) {

    const usuarioLogado = useSelector(state => state.usuarioLogado);

    const [extrato, setExtrato] = useState([]);
    async function buscaExtrato() {

        const response = await apiExchanges.get(`/extrato/${usuarioLogado.idUsuario}`, {
            headers: {
                Authorization: `Bearer ${usuarioLogado.token}`,
                ContentType: 'application/json'
            }
        })
        setExtrato(response.data);
    }

    useEffect(() => {
        buscaExtrato();
    }, [Extrato]);

    return (
        <View style={style.flex}>
            <Header page='Extrato' navigation={navigation} />

            <ScrollView>
                <View style={style.extrato}>

                    {
                        extrato.map(item => (
                            <TouchableOpacity
                                key={item.id}
                                style={style.extratoItem}>

                                <Text>{item.data}</Text>

                                <Text style={[style.extratoValor, {
                                    color: item.status == 'Aprovado' ? item.tipo == '+' ? '#0f0' : '#f00' : '#000'
                                }]}>
                                    {item.tipo}
                                CP$
                                {item.valor}
                                </Text>

                                <Text> {item.status}</Text>
                            </TouchableOpacity>
                        ))

                    }
                </View>
            </ScrollView>

        </View>
    );
};