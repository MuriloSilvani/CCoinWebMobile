import React from 'react';
import { Text, TouchableOpacity, View, ScrollView, TextInput, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../Components/Header';

export default function Resgate({ navigation }) {
    return (
        <View style={style.flex}>
            <Header page='Resgate' navigation={navigation} />

            <View style={style.resgatesTopo}>

                <TouchableOpacity style={style.resgatesTopoItem}>
                    <TextInput
                        style={style.resgatesBuscaInput}
                        placeholder='Buscar Item'
                    />
                    <Icon
                        style={style.resgatesTopoIcone}
                        name='search'
                    />
                </TouchableOpacity>

                {
                    true && (
                        <TouchableOpacity style={style.resgatesTopoItem}>
                            <Icon
                                style={style.resgatesTopoIcone}
                                name='settings'
                            />
                            <Text style={style.resgatesGerenciar}>
                                Gerenciar catálogo
                            </Text>
                        </TouchableOpacity>

                    )
                }
            </View>

            <ScrollView>
                <View style={style.resgates}>

                    {
                        [0, 1, 2, 3, 4].map(item => (

                            <TouchableOpacity
                                key={item}
                                style={style.itemView}
                            >
                                <Text style={style.itemNome}> nome item </Text>

                                <View style={style.itemImageView}>
                                    <Image
                                        source={{ uri: 'https://http2.mlstatic.com/caneca-capito-america-super-heroi-marvel-geek-03-D_NQ_NP_986455-MLB31358728810_072019-F.jpg' }}
                                        style={style.itemImage}
                                    />
                                    <Text style={style.itemPreco}>CP$ 99</Text>
                                </View>



                                <View style={style.itemOptions}>

                                    <TouchableOpacity style={style.itemOptionButton}>

                                        <Text style={style.itemOptionButtonText}>Reservar</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={style.itemOptionButton}>

                                        <Text style={style.itemOptionButtonText}>Comprar</Text>
                                    </TouchableOpacity>

                                </View>

                            </TouchableOpacity>


                        ))
                    }

                </View>
            </ScrollView>
        </View>
    );
};