import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from "./reducers";
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk';
import Router from "./Router";

class App extends Component {
    componentWillMount() {
        const config = {
            //TODO: Add firebase integration here
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View style={{ flex: 1}}>
                    <Router/>
                </View>
            </Provider>
        )
    };
}

export default App;