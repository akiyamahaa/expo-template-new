import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/elder/Header'
import SlideImage from '@/components/slider'
import { videoData } from '../data/data'
import CollectionCard from '@/components/music/CollectionCard'
import SingerCard from '@/components/music/SingerCard'
import ButtonSearch from '@/components/elder/ButtonSearch'

const music = () => {
  return (
    <View className="flex-1 bg-gray-200 pb-8">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScreenWrapper>
          <View className="space-y-4 px-5 mb-4">
            <Header />
            <View className="space-y-4">
              <Text className="text-3xl text-gray-800 leading-9">Gợi ý cho bạn</Text>
              <ButtonSearch />
            </View>
          </View>
        </ScreenWrapper>
        <SlideImage itemList={videoData} />
        <View className="space-y-6 mt-6">
          <View className="px-5 space-y-4">
            <Text className="text-2xl font-medium text-gray-800">Bộ sưu tập mới</Text>
            <View>
              <CollectionCard />
            </View>
          </View>
          <View className="px-5 space-y-4">
            <Text className="text-2xl font-medium text-gray-800">Nghệ sĩ</Text>
            <View>
              <SingerCard />
            </View>
          </View>
          <View className="px-5 space-y-4">
            <Text className="text-2xl font-medium text-gray-800">Nhạc Bolero</Text>
            <View>
              <CollectionCard />
            </View>
          </View>
          <View className="px-5 space-y-4">
            <Text className="text-2xl font-medium text-gray-800">Nhạc thiền</Text>
            <View>
              <CollectionCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default music
