import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    },
    title: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
});

export default Header;
