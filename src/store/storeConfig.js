import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import contactsReducer from './reducers/contacts'

const reducers = combineReducers({
    user: userReducer,
    contacts: contactsReducer,
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig