import { createStore } from 'redux';

function setUsuarioLogado(state = { usuarioLogado: null }, action) {

    switch (action.type) {
        case 'USER':
            return { usuarioLogado: action.usuarioLogado };
    }
}

export default createStore(setUsuarioLogado);

