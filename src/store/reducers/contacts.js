import { ADD_CONTACT } from '../actions/actionTypes'

const initialState = {
    contacts: [{
        id: Math.random(),
        nickname: 'Adeilson Silva',
        email: 'adeilson@gmail.com',
        image: require('../../../assets/imgs/fence.jpg')
    }, {
        id: Math.random(),
        nickname: 'Juliana Silva',
        email: 'juliana@gmail.com',
        image: require('../../../assets/imgs/bw.jpg')
    }, {
        id: Math.random(),
        nickname: 'João Silva',
        email: 'joao@gmail.com',
        image: require('../../../assets/imgs/bw.jpg')
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: state.contacts.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
}

export default reducer