import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry, YellowBox } from 'react-native'
import Navigator from './src/Navigator'
import {name as appName} from './app.json'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import storeConfig from './src/store/storeConfig'

import axios from 'axios'
axios.defaults.baseURL = 'https://agendasuperlogica.firebaseio.com/'

const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux)
