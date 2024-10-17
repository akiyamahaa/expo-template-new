import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import InfoBigCard from '@/components/elder/InfoBigCard'
import Header from '@/components/elder/Header'
import { technologyData } from '../data/data'

const technology = () => {
  return (
    <View className="flex-1 px-5 bg-gray-200 pb-8">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScreenWrapper>
          <View className="space-y-4">
            <Header />
            <View className="space-y-2">
              <Text className="text-3xl text-gray-800 leading-9">
                Kiến thức công nghệ giúp bạn tự tin
              </Text>
              <Text className="text-sm leading-5 text-gray-800">
                Những thông tin về công nghệ giúp bạn thoải mái khi sử dụng các thiết bị, ứng dụng.
              </Text>
            </View>
            <View className="space-y-4">
              {technologyData.map((data) => (
                <View key={data.id}>
                  <InfoBigCard data={data} />
                </View>
              ))}
            </View>
          </View>
        </ScreenWrapper>
      </ScrollView>
    </View>
  )
}

export default technology
