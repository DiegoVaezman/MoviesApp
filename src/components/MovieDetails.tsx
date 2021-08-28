import React from 'react'
import { FlatList, Text, View } from 'react-native'
import currencyFormater from 'currency-formatter'

import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditInterface';
import Icon from 'react-native-vector-icons/Ionicons'
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
    return (
        <>
            {/* Details */}
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Icon
                    name="star-outline"
                    color="grey"
                    size={16}
                    />
                    <Text>{movieFull.vote_average}</Text>

                    <Text style={{marginLeft: 5}}>
                        - {movieFull.genres.map( g => g.name).join(', ')}
                    </Text>
                </View>
            </View>

            {/* Story */}
            <View style={{marginTop: 10}}>
                <Text style={{fontSize: 23, fontWeight: 'bold'}}>
                    Historia
                </Text>
                <Text style={{fontSize: 16}}>
                    {movieFull.overview}
                </Text>
            </View>
            {/* Presupuesto */}
            <View style={{marginTop: 10}}>
                <Text style={{fontSize: 23, fontWeight: 'bold'}}>
                    Presupuesto
                </Text>
                <Text style={{fontSize: 18}}>
                    { currencyFormater.format( movieFull.budget , {code:'USD'}) }
                </Text>
            </View>

            {/* Cast */}
            <View style={{marginTop: 10, marginBottom: 100}}>
                <Text style={{fontSize: 23, fontWeight: 'bold'}}>
                    Actores
                </Text>

                <FlatList 
                    data={cast}
                    keyExtractor={ (item) => item.id.toString() }
                    renderItem={ ({item}) => <CastItem actor={item} /> }
                    horizontal= {true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:10, height: 70, marginHorizontal: -20}}
                />   
                
            </View>
        </>
    )
}
