import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import ButtonBack from '@/components/elder/ButtonBack'
import { useLocalSearchParams } from 'expo-router'
import { totalData } from '../data/data'
import * as Speech from 'expo-speech'
import { speakText } from '@/utils/function'
import YoutubePlayer from 'react-native-youtube-iframe'

const DetailPage = () => {
  const params = useLocalSearchParams()
  const { id, type }: any = params
  const [playing, setPlaying] = useState(false)

  const onStateChange = useCallback((state: any) => {
    if (state === 'ended') {
      setPlaying(false)
    }
  }, [])
  const [data] = useState(
    totalData.find((item) => item.id === Number(id) && item.type === Number(type)),
  )

  const handleSpeak = async () => {
    // Speak title, description, and body items with delay between each
    if (data?.title) {
      await speakText(data.title)
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait 1 second
    }

    if (data?.description) {
      await speakText(data.description)
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait 1 second
    }

    if (Array.isArray(data?.body)) {
      for (const item of data.body) {
        if (item?.title) {
          await speakText(item.title)
          await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait 1 second
        }
        if (item?.content) {
          await speakText(item.content)
          await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait 1 second
        }
      }
    }
  }
  useEffect(() => {
    return () => {
      Speech.stop() // This stops any ongoing speech
    }
  }, [data])

  return (
    <View className="flex-1 bg-gray-200">
      <View>
        <StatusBar barStyle={'light-content'} />
        <ImageBackground source={{ uri: data?.image }} className="h-52 w-full relative z-10">
          <ScreenWrapper>
            <View className="flex-row px-5 relative z-10">
              <ButtonBack isBlur={true} />
            </View>
          </ScreenWrapper>
          {/* Blur Layout */}
          <View className="bg-gray-800 absolute top-0 left-0 right-0 bottom-0 opacity-40" />
        </ImageBackground>
      </View>
      <ScrollView className="flex-1 px-4 py-6 bg-background-300 -mt-4 rounded-t-3xl space-y-4">
        {data!.youtubeId && (
          <View className="h-48 w-full">
            <YoutubePlayer
              height={240}
              play={playing}
              videoId={data!.youtubeId}
              onChangeState={onStateChange}
            />
          </View>
        )}
        <TouchableOpacity onPress={handleSpeak}>
          <View className="w-full text-center bg-primary-600 p-2.5 rounded-xl mt-4">
            <Text className="text-center text-white text-lg font-semibold">Đọc nội dung</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text className="font-bold text-[20px] text-gray-800">{data?.title}</Text>
        </View>
        <View className="space-y-4">
          <Text className="text-base text-gray-500 leading-6">{data?.description}</Text>
        </View>
        <View className="space-y-4">
          {data?.body.map((bodyElm) => (
            <View key={`${data.title}-${bodyElm.title}`} className="space-y-2">
              <Text className="font-semibold text-md text-gray-800">{bodyElm.title}</Text>
              {bodyElm.image && (
                <Image
                  source={bodyElm.image}
                  className="w-full h-52 rounded-lg"
                  resizeMode="cover"
                />
              )}
              <Text className="text-base text-gray-500">{bodyElm.content}</Text>
            </View>
          ))}
        </View>
        <View className="h-12" />
      </ScrollView>
    </View>
  )
}

export default DetailPage
