import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {

    let onButtonPressed = () => {
        alert('Button has been clicked!!')
    }

    return (
        <View style={styles.container}>
            <Text>Hello Purushotam!!</Text>
            <Button title={'Button'} onPress={onButtonPressed}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
