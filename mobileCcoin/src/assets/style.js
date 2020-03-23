import { StyleSheet } from 'react-native'

export default style = StyleSheet.create({
    // menu
    menuUsuario: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuUsuarioFoto: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 10,
        borderWidth: 2,
        borderColor: '#000',
    },
    menuUsuarioNome: {
        flex: 1,
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
    },
    menuSaldo: {
        padding: 10,
        backgroundColor: '#000',
        flexDirection: 'row',
    },
    menuSaldoTitulo: {
        color: '#fff',
        marginRight: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
    menuSaldoValor: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        flex: 1,
    },
    menuUnidade: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#000',
        fontSize: 14,

    },
    menuFim: {
        padding: 10,
        borderTopWidth: 2,
        borderColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuFimTexto: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
        flex: 1,
    },
    // menu
    // login
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        resizeMode: 'contain',
        width: '60%',
        marginBottom: 25,
    },
    input: {
        width: '80%',
        borderBottomWidth: 2,
        borderColor: '#ffb500',
        alignItems: 'center',
        marginBottom: 25,
        fontSize: 16
    },
    button: {
        marginTop: 25,
        width: '60%',
        backgroundColor: '#ffb500',
        alignItems: 'center',
        borderRadius: 25,
        padding: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20
    },
    // login
    // header
    headerView: {
        backgroundColor: '#ffb500',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconeMenu: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        paddingVertical: 7,
        paddingHorizontal: 20,
    },
    tituloMenu: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },
    logout: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        paddingVertical: 7,
        paddingHorizontal: 20,
    },
    // header
    // transferencia
    flex: {
        flex: 1,
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sucessoGif: {
        width: '80%',
        resizeMode: 'contain',
        maxHeight: 300,
    },
    sucessoText: {
        width: '80%',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    // transferencia
    // extrato
    extrato: {
        padding: 20,
    },
    extratoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        alignContent: 'center',
    },
    extratoValor: {
        fontWeight: 'bold',
    },
    // extrato
    // resgates
    resgatesTopo: {
        paddingHorizontal: 20,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    resgatesTopoItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '50%',
    },
    resgatesTopoIcone: {
        fontSize: 20,
        paddingHorizontal: 10,
    },
    resgatesBuscaInput: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#000',
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 0,
        borderRadius: 5,
    },

    resgatesGerenciar: {

    },



    resgates: {
        padding: 20,
    },


    itemView: {
        backgroundColor: 'red',
        marginBottom: 10,
    },
    itemNome: {

    },
    itemImageView: {

    },
    itemImage: {
        width: '100%',
        height: 200,
    },
    itemPreco: {

    },
    itemOptions: {

    },
    itemOptionButton: {

    },
    itemOptionButtonText: {

    },
    //  resgates

});