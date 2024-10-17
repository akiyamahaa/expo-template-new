import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/elder/Header'
import SlideImage from '@/components/slider'
import CollectionCard from '@/components/music/CollectionCard'
import SingerCard from '@/components/music/SingerCard'
// import ButtonSearch from '@/components/elder/ButtonSearch'
import { listAlbums, listAuthor } from '../data/music'
import { EMusicType } from '@/types/common'
import { getRandomArray } from '@/utils/function'

const music = () => {
  return (
    <View className="flex-1 bg-gray-200 pb-8">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScreenWrapper>
          <View className="space-y-4 px-5 mb-4">
            <Header />
            <View className="space-y-4">
              <Text className="text-3xl text-gray-800 leading-9">Gợi ý cho bạn</Text>
              {/* <View className="my-4">
                <ButtonSearch />
              </View> */}
            </View>
          </View>
        </ScreenWrapper>
        <SlideImage itemList={getRandomArray(listAlbums, 3)} />
        <View className="space-y-6 mt-6">
          <View className="px-5 space-y-4">
            <Text className="text-2xl font-medium text-gray-800">Bộ sưu tập mới</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row items-center">
                {getRandomArray(listAlbums, 3).map((album) => (
                  <View key={`${album.id}-${album.musicType}`} className="mr-2">
                    <CollectionCard album={album} />
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
          <View className="px-5 space-y-4">
            <Text className="text-2xl font-medium text-gray-800">Nghệ sĩ</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row items-center">
                {listAuthor.map((author) => (
                  <View key={author.name} className="mr-2">
                    <SingerCard author={author} />
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
          <View className="px-5 space-y-4">
            <Text className="text-2xl font-medium text-gray-800">Nhạc Bolero</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row items-center">
                {listAlbums
                  .filter((list) => list.musicType === EMusicType.BOLERO)
                  .map((album) => (
                    <View key={`${album.id}-${album.musicType}`} className="mr-2">
                      <CollectionCard album={album} />
                    </View>
                  ))}
              </View>
            </ScrollView>
          </View>
          <View className="px-5 space-y-4">
            <Text className="text-2xl font-medium text-gray-800">Nhạc thiền</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row items-center">
                {listAlbums
                  .filter((list) => list.musicType === EMusicType.THIEN)
                  .map((album) => (
                    <View key={`${album.id}-${album.musicType}`} className="mr-2">
                      <CollectionCard album={album} />
                    </View>
                  ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default music
