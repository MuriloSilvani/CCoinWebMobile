import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

import { useDispatch } from 'react-redux';

import Logo from '../../assets/logo.png';

import { apiUsuarios } from '../../services/api';

export default function Login({ navigation }) {

    const dispatch = useDispatch();

    const [login, setLogin] = useState('murilo@compasso.com.br');
    const [senha, setSenha] = useState('123');
    const [erro, setErro] = useState('');

    async function loginHandler() {

        if (login != '') {
            if (senha != '') {

                try {

                    const response = await apiUsuarios.post('/login', {
                        login,
                        senha
                    });

                    dispatch({ type: 'USER', usuarioLogado: response.data });

                    setLogin('');
                    setSenha('');
                    setErro('');
                    navigation.navigate('Pages');

                } catch (error) {
                    // setErro(error.message);
                    console.log(error)
                    setErro('Login ou senha incorretos');
                }
            } else {
                setErro('Informe a senha');
            }
        } else {
            setErro('Informe o login');
        }
    }

    return (
        <View style={style.container}>
            <Image style={style.imagem} source={Logo} />

            <TextInput
                value={login}
                onChangeText={setLogin}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Login'
                style={style.input} />

            <TextInput
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
                placeholder='Senha'
                style={style.input} />

            <Text>{erro}</Text>

            <TouchableOpacity
                style={style.button}
                onPress={() => { loginHandler() }}
            >
                <Text style={style.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}