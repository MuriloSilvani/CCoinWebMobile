import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';

import Header from '../../Components/Header';

// import AutoComplete from 'react-native-autocomplete-select';

export default function Home({ navigation }) {

    const usuarioLogado = useSelector(state => state.usuarioLogado);

    // const onSelect = (suggestion) => {
    //     console.log(suggestion) // the pressed suggestion
    // }

    // const suggestions = [
    //     { text: 'suggestion1', anotherProperty: 'value' },
    //     { text: 'suggestion2', anotherProperty: 'value2' }
    // ]

    return (
        <View>
            <Header page='Home' navigation={navigation} />

            {/* <AutoComplete
                onSelect={onSelect}
                suggestions={suggestions}
                suggestionObjectTextProperty='text'
                value='sug'
            /> */}

        </View>
    );
};