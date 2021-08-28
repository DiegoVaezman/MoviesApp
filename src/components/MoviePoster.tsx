import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';


interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 440, width= 280 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 8
            }}
            onPress={ () => navigation.navigate('DetailScreen', movie)}
        >
            <View style={styles.imageConatiner}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18
    },
    imageConatiner: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 9,
    }
});