import React from 'react'
import { Image, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Cast } from '../interfaces/creditInterface';

interface Props {
    actor: Cast;
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={styles.container}>
            {
                actor.profile_path && (
                    <Image
                        source={{ uri }}
                        style={{ width: 50, height: 50, borderRadius: 10 }}
                    />
                )
            }

            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 18, opacity: 0.7 }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 10,
        height: 50,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 9,
        marginRight: 15,
        paddingRight:20,
        marginHorizontal: 20
    },
    actorInfo: {
        marginLeft: 10
    }
});
