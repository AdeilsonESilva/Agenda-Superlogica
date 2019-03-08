import React from 'react'
import {
    createBottomTabNavigator,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import ListContact from './screens/ListContact'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

const authRouter = createStackNavigator({
    Login: { screen: Login, navigationOptions: { title: 'Entrar' } },
    Register: { screen: Register, navigationOptions: { title: 'Registrar' } }
}, {
    initialRouteName: 'Login'
})

const loginOrProfileRouter = createSwitchNavigator({
    Profile: Profile,
    Auth: authRouter
}, {
    initialRouteName: 'Auth'
})

const MenuRoutes = {
    ListContact: {
        name: 'ListContact',
        screen: ListContact,
        navigationOptions: {
            title: 'Agenda',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title: 'Adicionar Foto',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='camera' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: loginOrProfileRouter,
        navigationOptions: {
            title: 'Perfil',
            tabBarIcon: ({ tintColor: color }) =>
                <Icon name='user' size={30} color={color} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'ListContact',
    tabBarOptions: {
        showLabel: false,
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)
export default MenuNavigator