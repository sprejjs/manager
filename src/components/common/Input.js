import React from 'react';
import {TextInput, View, Text} from 'react-native'

const Input = ({label, value, onChangeText, placeholder, secure}) => {
    const { inputStyle, labelStyle, containerStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                autoCapitalize='none'
                secureTextEntry={secure}
                autoCorrect={false}
                placeholder={placeholder}
                value ={value}
                style={inputStyle}
                onChangeText = {onChangeText}
            />
        </View>
    );
};

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        fontSize: 18,
        paddingRight: 5,
        paddingLeft: 5,
        lineHeight: 23,
        color: '#000',
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export {Input}
