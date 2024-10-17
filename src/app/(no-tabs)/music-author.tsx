import { ImageBackground, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import ButtonBack from '@/components/elder/ButtonBack'
import MusicCard from '@/components/music/MusicCard'
import { allMusics, listAuthor, listMusics } from '../data/music'
import { useLocalSearchParams } from 'expo-router'

const MusicAuthor = () => {
  const params = useLocalSearchParams()
  const { authorName } = params
  const authorInfo = listAuthor.find((author) => author.name === authorName)
  const authorMusics = allMusics.filter((music) => music.author === authorName)
  return (
    <View className="flex-1 bg-gray-200">
      <ScrollView>
        <View>
          <StatusBar barStyle={'light-content'} />
          <ImageBackground source={{ uri: authorInfo?.thumbnail }} className="h-96 w-full relative">
            <ScreenWrapper>
              <View className="flex-row px-5 relative z-10">
                <ButtonBack isBlur={true} />
              </View>
            </ScreenWrapper>
            {/* Blur Layout */}
            <View className="bg-gray-800 absolute top-0 left-0 right-0 bottom-0 opacity-20" />
          </ImageBackground>
        </View>
        <View className="px-5 py-4 space-y-6">
          <View>
            <Text className="text-2xl font-semibold text-gray-800">{authorInfo?.name}</Text>
          </View>
          <View className="space-y-4">
            {authorMusics?.map((music) => (
              <View key={music.id}>
                <MusicCard music={music} listMusic={listMusics} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default MusicAuthor
