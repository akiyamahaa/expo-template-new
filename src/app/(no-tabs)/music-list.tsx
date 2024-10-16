import { ImageBackground, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import ScreenWrapper from '@/components/ScreenWrapper'
import ButtonBack from '@/components/elder/ButtonBack'
import MusicCard from '@/components/music/MusicCard'

type Props = {}

const MusicList = (props: Props) => {
  return (
    <View className="flex-1 bg-gray-200">
      <View>
        <StatusBar barStyle={'light-content'} />
        <ImageBackground source={images.nhactrutinh} className="h-96 w-full relative">
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
          <Text className="text-2xl font-semibold text-gray-800">
            100 Ca Khúc Nhạc Trữ Tình Hay Nhất
          </Text>
          <Text className="text-base text-gray-500">Album - 2022</Text>
        </View>
        <View>
          <MusicCard />
        </View>
      </View>
    </View>
  )
}

export default MusicList
