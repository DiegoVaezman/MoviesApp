import React from "react";
import { ActivityIndicator, Dimensions, View, ScrollView } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HorizontalSlider } from "../components/HorizontalSlider";
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColores';
import { useContext } from 'react';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from "react";


const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const {setMainColors} = useContext(GradientContext)
    
    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index]
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const [primary = 'green', secondary = 'orange'] =  await getImageColors(uri);

        setMainColors({primary, secondary})
    }

    useEffect(() => {
       if (nowPlaying.length > 0) {
           getPosterColors(0)
       }
    }, [nowPlaying])

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <ActivityIndicator 
                    color='red'
                    size={100}
                />
            </View>
        )
    }

    return (
        
        <GradientBackground>
            <ScrollView>
                <View style={{
                    marginTop: top + 20
                }}>
            
                    {/* Principal carousel */}
                   <View style={{height: 460}}>
                       <Carousel
                        data={nowPlaying}
                        renderItem={ ({item}) => <MoviePoster movie={ item } /> }
                        sliderWidth={ windowWidth }
                        itemWidth={ 300 }
                        inactiveSlideOpacity={0.9}
                        onSnapToItem={index => { getPosterColors(index) }}
                       />
                   </View>
                   {/* Horizontal sliders */}
                   <HorizontalSlider movies={popular} title="Populares" />
                   <HorizontalSlider movies={topRated} title="Mejor puntuación" />
                   <HorizontalSlider movies={upcoming} title="Próximamente" />
                </View>
            </ScrollView>
        </GradientBackground>
    )
}

