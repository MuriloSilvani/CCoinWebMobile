import React from 'react';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { View, Text, Image, Switch } from 'react-native';

export default function Menu(props) {

    return (<>
        <View>
            <View style={style.menuUsuario}>
                <Image
                    style={style.menuUsuarioFoto}
                    source={{ uri: 'https://avatars2.githubusercontent.com/u/35570019?s=460&u=23c3a618517b9b11d410cdb66a797eb9bc3873b7&v=4' }} />
                <Text style={style.menuUsuarioNome}>Murilo Silvani </Text>
            </View>
            <View style={style.menuSaldo}>
                <Text style={style.menuSaldoTitulo}>CP$</Text>
                <Text style={style.menuSaldoValor}>999999</Text>
            </View>
            <View>
                <Text style={style.menuUnidade}>Sede: Chapecó - SC</Text>
            </View>
        </View>



        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>


        <View style={style.menuFim}>
            <Text style={style.menuFimTexto}>CP$ Compassito</Text>
            <Switch
                trackColor='#fff'
                thumbColor='#000'
            />
        </View>
    </>);
}
