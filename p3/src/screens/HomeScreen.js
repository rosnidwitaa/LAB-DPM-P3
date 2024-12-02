import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; // Pastikan sudah menginstal @expo/vector-icons
import Header from '../components/Header';

const HomeScreen = () => {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage('Welcome to the Home Screen!(Rosni Dwita)');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <LinearGradient
            colors={['#6a11cb', '#2575fc']}
            style={styles.gradient}
        >
            <View style={styles.container}>
                <Header title="Home" />
                <Ionicons name="home-outline" size={100} color="#fff" />
                <Text style={styles.text}>{message}</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 24,
        color: '#fff',
        marginTop: 20,
        textAlign: 'center',
        fontWeight: '600',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
});

export default HomeScreen;
