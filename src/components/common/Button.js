import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const Button = (props) => {
    const {buttonStyle, textStyle} = styles;

    return (
        <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
};

const styles = {
    buttonStyle: {
        flexGrow: 1,
        marginTop: 10,
        alignSelf: 'stretch',
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: '#007aff',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 40
    },
    textStyle: {
        alignSelf: 'center',
        color: "#007aff",
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export {Button};
