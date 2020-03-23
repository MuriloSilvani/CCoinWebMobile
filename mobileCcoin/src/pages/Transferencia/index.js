import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';

import Header from '../../Components/Header';

import Checked from '../../assets/checked.gif';
import Error from '../../assets/error.gif';

import { apiExchanges } from '../../services/api';

export default function Transferencia({ navigation }) {

    const usuarioLogado = useSelector(state => state.usuarioLogado);

    const [statusTransferencia, setStatusTransferencia] = useState('');

    const [erro, setErro] = useState('');

    const [idUsuarioDestino, setIdUsuarioDestino] = useState('');
    const [valor, setValor] = useState('');

    async function transferirHandler() {

        if (idUsuarioDestino == '') {
            setErro('Informe o destino');
        } else if (valor == '') {
            setErro('Informe o valor');
        } else {
            const valorSplit = parseInt(valor.split('CP$ ')[1]);
            if (valorSplit <= 0) {
                setErro('Informe um valor válido');
            } else {
                setErro('');

                try {

                    const response = await apiExchanges.post(`/transferencia/${usuarioLogado.idUsuario}`, {
                        idUsuarioDestino,
                        valor: valorSplit
                    }, {
                        headers: {
                            Authorization: `Bearer ${usuarioLogado.token}`,
                            ContentType: 'application/json'
                        }
                    })

                    setStatusTransferencia('aprovada');
                } catch (error) {

                    setStatusTransferencia('negada');
                }
                setIdUsuarioDestino('');
                setValor('');

                setTimeout(() => {
                    setStatusTransferencia('')
                }, 3500);
            }
        }
    }

    return (
        <View style={style.flex}>
            <Header page='Transferencia' navigation={navigation} />
            <View style={style.center}>

                {statusTransferencia == 'aprovada' && (<>
                    <Text style={style.sucessoText}>Transferência realizada com sucesso!</Text>
                    <Image source={Checked} style={style.sucessoGif} />
                </>)}
                {statusTransferencia == 'negada' && (<>
                    <Text style={style.sucessoText}>Ocorreu um erro durante a operação!</Text>
                    <Image source={Error} style={style.sucessoGif} />
                </>)}
                {statusTransferencia == '' && (<>

                    <Text> Para quem você deseja transferir? </Text>
                    <TextInput
                        placeholder='Destinatário'
                        style={style.input}
                        value={idUsuarioDestino}
                        onChangeText={e => {
                            setIdUsuarioDestino(e)
                        }} />

                    <Text> Quanto você deseja transferir? </Text>
                    <TextInput
                        keyboardType={'numeric'}
                        placeholder='CP$ 00'
                        style={style.input}
                        value={valor}
                        onChangeText={e => {

                            if (e.length < 4) {
                                setValor('CP$ ' + e);
                            } else {
                                setValor(e);
                            }
                        }} />

                    <Text>{erro}</Text>

                    <TouchableOpacity
                        style={style.button}
                        onPress={() => { transferirHandler() }}
                    >
                        <Text style={style.buttonText}>Transferir</Text>
                    </TouchableOpacity>
                </>)}


            </View>
        </View>
    );
};