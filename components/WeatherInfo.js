import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../utils/index'

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors

export default function weatherInformation({ currentWeather }) {
    const {
        main: { temp },
        weather: [details],
        name,
    } = currentWeather
    const { icon, main, description } = details

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.weatherInformation}>
            <Text>{name}</Text>
            <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
            <Text style={styles.textPrimary}>{temp}° C</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.texSecondary}>{main}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherInformation: {
        alignItems: 'center',
    },
    weatherDescription: {
        textTransform: 'capitalize',
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },
    textPrimary: {
        fontSize: 42,
        color: PRIMARY_COLOR,
    },
    texSecondary: {
        fontSize: 22,
        color: SECONDARY_COLOR,
        fontWeight: '510',
        marginTop: 11,
    },
})
