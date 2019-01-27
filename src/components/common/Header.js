// Import libraries for making a component
import React from 'react'
import {Text, View} from 'react-native'

//Make a component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        paddingTop: 20,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        padding: 30
    }
};

// Make the component available to other parts of the app
export {Header};
